"use client";

import React from "react";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>
        The page you are looking for does not exist or you don't have access.
      </p>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
};

export default NotFoundPage;
