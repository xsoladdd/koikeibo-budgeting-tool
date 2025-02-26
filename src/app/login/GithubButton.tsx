"use client";
import GithubLogo from "@/components/logo/GithubLogo";
import { Button } from "@/components/ui/button";
import React from "react";
import { signIn } from "next-auth/react";

const GithubButton: React.FC = () => {
  return (
    <>
      <Button
        className="w-full"
        variant="outline"
        onClick={() => signIn("github", { redirectTo: "/" })}
      >
        <GithubLogo />
        Login with GitHub
      </Button>
    </>
  );
};
export default GithubButton;
