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
  onOpenAutoFocus?: (event: Event) => void;
  onCloseAutoFocus?: (event: Event) => void;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: PointerEvent) => void;
}

export function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure?",
  titleDescription = "Are you sure you want to proceed?",
  description,
  confirmLabel = "Proceed",
  cancelLabel = "Cancel",
  onCloseAutoFocus,
  onEscapeKeyDown,
  onPointerDownOutside,
}: ConfirmationDialogProps) {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
      // onOpenAutoFocus={onOpenAutoFocus}
      // onCloseAutoFocus={onCloseAutoFocus}
      // onEscapeKeyDown={onEscapeKeyDown}
      // onPointerDownOutside={onPointerDownOutside}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {titleDescription && (
            <DialogDescription className="text-sm text-muted-foreground">
              {titleDescription}
            </DialogDescription>
          )}
        </DialogHeader>
        <DialogDescription className="py-4">{description}</DialogDescription>
        <DialogFooter className="sm:justify-start">
          <Button variant="secondary" onClick={onClose}>
            {cancelLabel}
          </Button>
          <Button variant="default" onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
