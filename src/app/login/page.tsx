"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ErrorAccount from "../(dashboard)/Components/ErrorAccount";
import PageLoading from "../(dashboard)/Components/PageLoading";
import bg from "../../assets/background.jpg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import logo from "../../assets/logo.png";
import { useGlobalContext } from "../useGlobalContext";
import { useGetUserLazyQuery } from "@/graphql/generated";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const { replace } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { data } = useSession();
  const { setUser, user } = useGlobalContext();
  const [useGetUser] = useGetUserLazyQuery({
    onCompleted({ users }) {
      const user = users[0];
      setUser(user);
      replace("/");
    },
  });

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
          useGetUser({
            variables: {
              email: email,
            },
          });
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
    <div className="flex min-h-screen items-center justify-center ">
      <Card className="w-full max-w-md">
        <form onSubmit={handleLogin}>
          <CardHeader>
            <div className="  flex place-content-center place-items-center">
              <img src={logo.src} alt="Logo" className="h-24 w-auto" />
            </div>
            <CardTitle className="text-2xl font-bold pt-2">Login</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
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
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled={loading} type="submit">
              {loading ? "Loading..." : `Sign In`}
            </Button>
          </CardFooter>
        </form>
      </Card>
      <div className="absolute top-0 left-0 min-w-screen min-h-screen -z-10 h-screen w-screen bg-green-900">
        <Image
          src={bg.src}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
    </div>
  );
};

export default LoginPage;
