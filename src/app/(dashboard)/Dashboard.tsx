"use client";
import { useSession } from "next-auth/react";
import PageLoading from "./Components/PageLoading";
export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <PageLoading />;
  if (!session?.user) {
    return <p>Please Login</p>;
  }

  return <p> </p>;
}
