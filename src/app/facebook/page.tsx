"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";

export default function page() {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <div>
      Facebook page
      <br />
      <Button variant="primary">Test</Button>
      <button onClick={handleBtn}>Back</button>
      <br />
      <Link href="/">Back to home</Link>
    </div>
  );
}
