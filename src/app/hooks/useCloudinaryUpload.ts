import { useState } from "react";
import axios from "axios";

// Define the return type of the hook
interface UseCloudinaryUploadReturn {
  uploadToCloudinary: (file: File) => Promise<string | null>;
  isUploading: boolean;
  error: string | null;
}

/**
 * Custom hook for uploading files to Cloudinary.
 * @returns An object containing the upload function, upload state, and error state.
 */
const useCloudinaryUpload = (): UseCloudinaryUploadReturn => {
  const cloudName: string =
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "default_cloud_name";
  const uploadPreset: string = "ygwdwjty";
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const uploadToCloudinary = async (file: File): Promise<string | null> => {
    if (!file) {
      setError("No file provided.");
      return null;
    }

    setIsUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      setIsUploading(false);
      return response.data.secure_url as string; // Return the uploaded file's URL
    } catch (err) {
      setIsUploading(false);
      setError("Failed to upload. Please try again.");
      return null;
    }
  };

  return { uploadToCloudinary, isUploading, error };
};

export default useCloudinaryUpload;
