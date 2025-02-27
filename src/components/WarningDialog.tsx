import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  titleDescription?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  onOpenAutoFocus?: (event: Event) => void;
  onCloseAutoFocus?: (event: Event) => void;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: PointerEvent) => void;
  disabled?: boolean;
}

export function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure?",
  titleDescription = "Are you sure you want to proceed?",
  description,
  disabled = false,
  confirmLabel = "Proceed",
  cancelLabel = "Cancel",
  variant = "destructive",
}: ConfirmationDialogProps) {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(b) => {
        if (!disabled) {
          onClose();
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {/* {titleDescription && (
            <DialogDescription className="text-sm text-muted-foreground">
              {titleDescription}
            </DialogDescription>
          )} */}
        </DialogHeader>
        <DialogDescription className="">{description}</DialogDescription>
        <DialogFooter className="sm:justify-end">
          <Button variant="outline" onClick={onClose} disabled={disabled}>
            {cancelLabel}
          </Button>
          <Button variant={variant} onClick={onConfirm} disabled={disabled}>
            {confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
