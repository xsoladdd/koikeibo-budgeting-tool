"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "./logo.jpg";
import left from "./left2.svg";
import ErrorAccount from "../(dashboard)/Components/ErrorAccount";
import PageLoading from "../(dashboard)/Components/PageLoading";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const { replace } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    signIn("credentials", { email, password, redirect: false })
      .then((response) => {
        if (response?.error) {
          if (response?.error !== "Configuration") {
            setLoading(false);
            setError(response.error);
          } else {
            setError("Invalid username or password");
            setLoading(false);
            console.log(`Login Error`, response);
          }
        } else {
          setLoading(false);
          replace("/");
          setError("");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Login failed", error);
        setError("Invalid username or password");
      });
  };
  useEffect(() => {
    if (error !== "") {
      setError("");
    }
    return () => {};
  }, [email, password]);

  if (status === "loading") return <PageLoading />;
  if (session) return <ErrorAccount />;

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-4xl bg-white shadow-xl lg:grid lg:grid-cols-2 lg:rounded-lg">
        <div className="hidden lg:flex items-center justify-center p-12 bg-red-100">
          <Image
            src={left}
            alt="Project Progress Illustration"
            width={600}
            height={600}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center p-8 lg:p-12">
          <div className="pb-4">
            <Image src={logo} alt="logo" height={80} />
          </div>
          <h1 className="mb-6 text-3xl font-bold">Login</h1>
          <form
            className="w-full space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin(e);
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center"></div>
            {error && (
              <p className="text-sm text-red-500" role="alert">
                {error}
              </p>
            )}
            <Button
              type="submit"
              className="w-full bg-red-500 text-white"
              disabled={loading}
            >
              {loading ? `Loading...` : `Login`}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
