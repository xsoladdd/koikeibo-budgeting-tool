import { useMemo } from "react";

interface CloudinaryOptions {
  transformations?: {
    width?: number;
    height?: number;
    crop?: "crop" | "fit" | "scale" | "fill" | "thumb"; // Crop mode
    gravity?: "auto" | "center" | string; // Focus for cropping
    format?: string; // Image format (e.g., "jpg", "png")
    quality?: number; // Image quality (1-100)
    [key: string]: any; // Other Cloudinary transformations
  };
}
const useCloudinaryImage = (): {
  generateUrl: (url: string, options?: CloudinaryOptions | undefined) => string;
} => {
  const generateUrl = (url: string, options: CloudinaryOptions | undefined) => {
    if (!url) {
      return "https://placehold.co/600x400?text=No+Image"; // Return a placeholder image if no URL is provided.
    }
    if (!options) {
      return url; // Return the original URL if no options are provided.
    }
    const { transformations } = options;
    if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
      throw new Error(
        "NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME does not exist in env"
      );
    }
    const cloudName: string =
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "default_cloud_name";

    if (!cloudName || !url) {
      throw new Error("cloudName and url are required.");
    }

    // Extract publicId from the URL
    const urlParts = url.split("/");
    const publicId = urlParts[urlParts.length - 1].split(".")[0];

    const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;

    // Construct transformation string using correct Cloudinary syntax
    const transformationString = Object.entries(transformations || {})
      .map(([key, value]) => {
        switch (key) {
          case "width":
            return `w_${value}`;
          case "height":
            return `h_${value}`;
          case "crop":
            return `c_${value}`;
          case "gravity":
            return `g_${value}`;
          case "format":
            return `f_${value}`;
          case "quality":
            return `q_${value}`;
          default:
            return `${key}_${value}`;
        }
      })
      .join(",");

    // Return the complete URL
    return `${baseUrl}/${transformationString}/${publicId}`;
  };
  return { generateUrl };
};

export default useCloudinaryImage;
