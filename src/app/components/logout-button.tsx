"use client";

import { User } from "next-auth";
import { signOut } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type LogoutButtonProps = {
  user: User;
};

export function LogoutButton(props: LogoutButtonProps) {
  // get initials from user name
  const initials =
    props.user.name
      ?.split(" ")
      .map((n) => n[0])
      .join("") ?? "";
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarImage src={props.user.image!} alt="Avatar" className="hover:cursor-pointer" />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="p-4">
        <Button
          onClick={async () => {
            await signOut();
          }}
        >
          Logout
        </Button>
      </PopoverContent>
    </Popover>
  );
}
