"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <div>
      Facebook page
      <br />
      <button onClick={handleBtn}>Back</button>
      <br />
      <Link href="/">Back to home</Link>
    </div>
  );
}
