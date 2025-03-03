import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useUpdateUserMutation,
  useUpsertUserMutation,
} from "@/graphql/generated";
import { GRADE_LEVEL, ROLES, SECTION, STRANDS } from "@/var";
import { Label } from "@radix-ui/react-label";
import React, { useEffect, useState } from "react";
import { User } from "./page";

export type dialogType = "add" | "edit";

interface UserEditDialogProps {
  editingUser: Partial<User> | null;
  setEditingUser: (user: Partial<User> | null) => void;
  dialogType?: dialogType;
}

const AddEditUserDialog: React.FC<UserEditDialogProps> = ({
  editingUser,
  setEditingUser,
  dialogType = "edit",
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [upsertUserMutation, { loading: upsertLoading }] =
    useUpsertUserMutation({
      onCompleted: () => {
        setEditingUser(null);
        setPassword("");
      },
      refetchQueries: ["getUserList"],
    });

  const [updateUserMutation, { loading: updateLoading }] =
    useUpdateUserMutation({
      onCompleted: () => {
        setEditingUser(null);
        setPassword("");
      },
      refetchQueries: ["getUserList"],
    });
  const isRoleUser = editingUser?.role === "USER";
  const isEditMode = dialogType === "edit";
  const handleSaveUser = () => {
    if (!isEditMode) {
      upsertUserMutation({
        variables: {
          object: {
            email: email,
            password: password,
            role: editingUser?.role,
            isLocked: editingUser?.isLocked,
            strand: isRoleUser ? editingUser?.strand : "",
            grade: isRoleUser ? editingUser?.grade : "",
            section: isRoleUser ? editingUser?.section : "",
            firstname: editingUser?.firstname,
            lastname: editingUser?.lastname,
            changePass: true,
          },
        },
      });
    } else {
      updateUserMutation({
        variables: {
          where: {
            id: {
              _eq: editingUser?.id,
            },
          },
          set: {
            role: editingUser?.role,
            isLocked: editingUser?.isLocked,
            strand: isRoleUser ? editingUser?.strand : "",
            grade: isRoleUser ? editingUser?.grade : "",
            section: isRoleUser ? editingUser?.section : "",
            firstname: editingUser?.firstname,
            lastname: editingUser?.lastname,
            password: password ? password : undefined,
          },
        },
      });
    }
  };
  useEffect(() => {
    if (editingUser?.role !== undefined && editingUser?.role !== "USER") {
      setEditingUser({
        ...editingUser!,
        section: "",
        strand: "",
        grade: "",
      });
    }
    return () => {};
  }, [editingUser?.role]);

  const userFields = editingUser?.role === "USER" && (
    <>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="role" className="text-right">
          Grade
        </Label>
        <Select
          value={editingUser?.grade || ""}
          onValueChange={(value) =>
            setEditingUser({
              ...editingUser!,
              grade: value,
            })
          }
        >
          <SelectTrigger className="col-span-3">
            <SelectValue placeholder="Select a grade" />
          </SelectTrigger>
          <SelectContent>
            {GRADE_LEVEL.map((label, idx) => (
              <SelectItem value={label} key={idx}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="role" className="text-right">
          Strand
        </Label>
        <Select
          value={editingUser?.strand || ""}
          onValueChange={(value) =>
            setEditingUser({
              ...editingUser!,
              strand: value,
            })
          }
        >
          <SelectTrigger className="col-span-3">
            <SelectValue placeholder="Select a strand" />
          </SelectTrigger>
          <SelectContent>
            {STRANDS.map((label, idx) => (
              <SelectItem value={label} key={idx}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="role" className="text-right">
          Section
        </Label>
        <Select
          value={editingUser?.section || ""}
          disabled={!editingUser?.strand || !editingUser?.grade}
          onValueChange={(value) =>
            setEditingUser({
              ...editingUser!,
              section: value,
            })
          }
        >
          <SelectTrigger className="col-span-3">
            <SelectValue placeholder="Select a section" />
          </SelectTrigger>
          <SelectContent>
            {SECTION.find(
              ({ grade_level, strand }) =>
                grade_level === editingUser?.grade &&
                strand === editingUser?.strand
            )?.sections.map((label, idx) => (
              <SelectItem value={label} key={idx}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );

  return (
    <Dialog
      modal
      open={editingUser !== null}
      onOpenChange={() => setEditingUser(null)}
    >
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-lg w-full bg-custom-blue border-transparent !p-6">
        <DialogHeader>
          <DialogTitle className="text-custom-yellow">
            {isEditMode ? `Edit User: ${editingUser?.email}` : `Add User`}
          </DialogTitle>
        </DialogHeader>
        <div className="bg-white rounded-2xl px-4   py-2">
          <div className="grid gap-4 py-4">
            {dialogType === "add" && (
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="col-span-3"
                />
              </div>
            )}

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="firstname" className="text-right">
                First name
              </Label>
              <Input
                id="firstname"
                type="text"
                value={editingUser?.firstname || ""}
                onChange={(e) =>
                  setEditingUser({
                    ...editingUser!,
                    firstname: e.target.value!,
                  })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="lastname" className="text-right">
                Last name
              </Label>
              <Input
                id="lastname"
                type="text"
                value={editingUser?.lastname || ""}
                onChange={(e) =>
                  setEditingUser({
                    ...editingUser!,
                    lastname: e.target.value!,
                  })
                }
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="col-span-3"
              />
            </div>

            {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <Select
                value={editingUser?.role}
                onValueChange={(value) =>
                  setEditingUser({
                    ...editingUser!,
                    role: value,
                  })
                }
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  {ROLES.filter(({ value }) => value !== "BACKDOOR_ADMIN").map(
                    ({ label, value }, idx) => (
                      <SelectItem value={value} key={idx}>
                        {label}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div> */}

            {userFields}

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="isLocked" className="text-right">
                Locked
              </Label>
              <Checkbox
                id="isLocked"
                checked={editingUser?.isLocked}
                onCheckedChange={(checked) =>
                  setEditingUser({
                    ...editingUser!,
                    isLocked: checked as boolean,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            variant={"secondary"}
            onClick={handleSaveUser}
            disabled={upsertLoading || updateLoading || !editingUser?.role}
          >
            {upsertLoading || updateLoading ? "Loading" : "Save changes"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditUserDialog;
