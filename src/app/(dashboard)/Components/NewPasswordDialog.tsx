import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useGlobalContext } from "@/app/useGlobalContext";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUpdatePasswordMutation } from "@/graphql/generated";

const NewPasswordDialog: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser } = useGlobalContext();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [handleChangePassword, { loading }] = useUpdatePasswordMutation({
    onCompleted: (data) => {
      if (data?.update_users?.affected_rows) {
        setUser({ ...data?.update_users.returning[0] });
        setOpen(false);
        setNewPassword("");
        setConfirmPassword("");
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    // Here you would typically call an API to change the password
    console.log("Password change requested", { newPassword });
    if (user?.email && user?.id) {
      handleChangePassword({
        variables: {
          email: user?.email,
          id: user?.id,
          password: newPassword,
        },
      });
    }
  };

  useEffect(() => {
    if (user?.changePass) {
      setOpen(true);
    }
    return () => {};
  }, [user?.changePass]);
  return (
    <>
      <Dialog open={open} modal>
        <DialogContent className="sm:max-w-[425px]" closeButton={false}>
          <DialogHeader>
            <DialogTitle>Welcome to Campus Crave</DialogTitle>
            <DialogDescription>
              In able to use the application, you're required to add a password.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="new-password" className="text-right">
                  New
                </Label>
                <Input
                  id="new-password"
                  type="password"
                  className="col-span-3"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="confirm-password" className="text-right">
                  Confirm
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  className="col-span-3"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            {error && (
              <div className="flex items-center gap-2 text-red-500 mb-4">
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm">{error}</span>
              </div>
            )}
            <DialogFooter>
              <Button type="submit" disabled={loading}>
                {loading ? `Loading` : `Change Password`}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default NewPasswordDialog;
