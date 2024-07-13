"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

export function LoginButton() {
  const router = useRouter();
  return (
    <Button
      onClick={async () => {
        await signIn("auth0");
        router.refresh();
      }}
    >
      Login
    </Button>
  );
}
