import { useGlobalContext } from "@/app/useGlobalContext";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const ErrorAccount: React.FC = () => {
  // const router = useRouter();
  const { resetUser } = useGlobalContext();

  const handleLogout = () => {
    resetUser();
    signOut({ redirectTo: "/login" });
  };
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Something went wrong with the session,</h1>

        <button onClick={() => handleLogout()}>
          Click here to relogin and continue
        </button>
      </div>
    </>
  );
};
export default ErrorAccount;
