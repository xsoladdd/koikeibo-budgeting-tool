"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import { Meal } from "./page";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { dialogType } from "../accounts/AddEditUserDialog";
import useCloudinaryUpload from "@/app/hooks/useCloudinaryUpload";
import { ArrowUpFromLine, ImageIcon, RefreshCw, Upload, X } from "lucide-react";
import useCloudinaryImage from "@/app/hooks/useCloudinaryImage";
import { useDeleteMealByPkMutation } from "@/graphql/generated";

type EditMealDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  meal: Partial<Meal> | null;
  onSave: () => void;
  onMealChange: (meal: Partial<Meal>) => void;
  loading: boolean;
  categories?: {
    label: string;
    value: string;
  }[];
  dialogType?: dialogType;
};

const EditMealDialog: React.FC<EditMealDialogProps> = ({
  isOpen,
  onClose,
  meal,
  categories,
  onSave,
  onMealChange,
  loading,
  dialogType = "edit",
}) => {
  const isAdd = dialogType === "add";
  const { uploadToCloudinary, isUploading } = useCloudinaryUpload();
  const [deleteMeal, deleteMealProps] = useDeleteMealByPkMutation({
    refetchQueries: ["getMealList"],
    onCompleted(data, clientOptions) {
      onClose();
    },
  });

  const { generateUrl } = useCloudinaryImage();
  const onImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = await uploadToCloudinary(file);
      onMealChange({
        ...meal!,
        image: url || "",
      });
    }
  };

  const disableForm = isUploading || loading || deleteMealProps.loading;

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const loadingFragment = (
    <div className="w-full h-64 flex items-center justify-center bg-gray-100 rounded-md">
      {" "}
      <ArrowUpFromLine className="w-4 h-4" />{" "}
      <p className="text-gray-600">Uploading...</p>
    </div>
  );
  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        !isUploading && onClose();
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isAdd ? `Add` : `Edit`} Product {!isAdd && `: ${meal?.name}`}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {isAdd && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                disabled={disableForm}
                value={meal?.name}
                onChange={(e) =>
                  onMealChange({
                    ...meal!,
                    name: e.target.value,
                  })
                }
                className="col-span-3"
              />
            </div>
          )}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Image
            </Label>
            <input
              type="file"
              disabled={disableForm}
              ref={fileInputRef}
              onChange={onImageUpload}
              accept="image/*"
              className="hidden"
              aria-label="Upload image"
            />
            {meal?.image ? (
              <div className="col-span-3 relative group">
                {isUploading ? (
                  loadingFragment
                ) : (
                  <>
                    <img
                      src={generateUrl(meal?.image, {
                        transformations: {
                          crop: "fit",
                          height: 200,
                          quality: 500,
                          // width: 500,
                        },
                      })}
                      alt="Uploaded preview"
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={handleUploadClick}
                          className="flex items-center"
                        >
                          <RefreshCw className="w-2 h-2 mr-2" />
                          Change
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <button
                className="col-span-3 h-48 flex flex-col items-center justify-center bg-gray-100 rounded-md cursor-pointer transition-colors hover:bg-gray-200"
                onClick={handleUploadClick}
                disabled={loading || isUploading}
              >
                {isUploading ? (
                  loadingFragment
                ) : (
                  <>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <ImageIcon className="w-8 h-8" />
                      {/* <Upload className="w-8 h-8" /> */}
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      Click to upload an image
                    </p>
                  </>
                )}
              </button>
            )}
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              id="price"
              type="text"
              disabled={disableForm}
              value={meal?.price || ""}
              onChange={(e) =>
                onMealChange({
                  ...meal!,
                  price: parseFloat(e.target.value),
                })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              value={meal?.description || ""}
              disabled={disableForm}
              onChange={(e) =>
                onMealChange({
                  ...meal!,
                  description: e.target.value,
                })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Select
              value={`${meal?.category_id}`}
              disabled={disableForm}
              onValueChange={(value) =>
                onMealChange({
                  ...meal!,
                  category_id: parseInt(value),
                })
              }
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories
                  ?.filter(({ value }) => value !== "all")
                  .map(({ label, value }, idx) => (
                    <SelectItem key={idx} value={value} className="capitalize">
                      {label}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="isActive" className="text-right">
              Active
            </Label>
            <Checkbox
              id="isActive"
              disabled={disableForm}
              checked={meal?.isActive}
              onCheckedChange={(checked) =>
                onMealChange({
                  ...meal!,
                  isActive: checked as boolean,
                })
              }
            />
          </div>
        </div>
        <DialogFooter className="flex !justify-between w-full">
          <div className="">
            <Button
              variant="destructive"
              onClick={() => {
                deleteMeal({
                  variables: {
                    id: meal?.id!,
                  },
                });
              }}
              disabled={disableForm}
            >
              {loading ? "Loading" : "Delete"}
            </Button>
          </div>
          <div className="gap-2 flex">
            <Button variant="outline" onClick={onClose} disabled={disableForm}>
              Cancel
            </Button>
            <Button
              onClick={onSave}
              disabled={loading || isUploading || deleteMealProps.loading}
            >
              {loading ? "Loading" : "Save changes"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default EditMealDialog;
