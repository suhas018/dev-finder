"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function Header() {
  const session = useSession();

  return (
    <header>
      <div>
        {session.data ? (
          <Button
            onClick={(e) => {
              e.preventDefault(); 
              signOut();
            }}
          >
            Sign Out
          </Button>
        ) : (
          <Button
            onClick={(e) => {
              e.preventDefault();
              signIn("google");
            }}
          >
            Sign In
          </Button>
        )}
        <ModeToggle />
      </div>
    </header>
  );
}
