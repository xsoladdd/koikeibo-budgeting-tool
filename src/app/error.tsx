"use client";

import React from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  // const router = useRouter();

  // const goHome = () => {
  //   router.push("/");
  // };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Something went wrong</h1>
    </div>
  );
};

export default NotFoundPage;
