
"use client"

import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LogIn, LogOut, User } from "lucide-react"

export function AuthButton() {
  const { data: session, status } = useSession()
  const isAuthenticated = status === "authenticated"

  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium hidden sm:inline">{session.user?.email}</span>
        <Button variant="ghost" onClick={() => signOut({ callbackUrl: '/' })}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
        </Button>
      </div>
    )
  } else {
    return (
        <Button asChild variant="ghost">
            <Link href="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Admin Login
            </Link>
        </Button>
    )
  }
}
