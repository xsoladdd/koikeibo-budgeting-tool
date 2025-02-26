"use client";

import React from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
};

export default NotFoundPage;
