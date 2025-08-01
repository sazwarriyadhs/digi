"use client"

import { auth } from "@/lib/firebase"
import { onAuthStateChanged, signOut, User } from "firebase/auth"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LogIn, LogOut } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function AuthButton() {
  const [user, setUser] = useState<User | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Logout Berhasil",
        description: "Anda telah berhasil keluar.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Logout Gagal",
        description: "Terjadi kesalahan saat mencoba keluar.",
      });
    }
  };

  if (user) {
    return (
        <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout Admin
        </Button>
    )
  } else {
    return (
        <Button asChild variant="ghost">
            <Link href="/admin/login">
                <LogIn className="mr-2 h-4 w-4" />
                Admin Login
            </Link>
        </Button>
    )
  }
}
