
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogOut, Settings, Newspaper } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }

  return (
    <div className="min-h-screen bg-muted/40 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">Admin Dashboard</h1>
            <p className="mt-3 text-lg text-muted-foreground">Welcome, {session.user?.email}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
                <Newspaper className="w-8 h-8 text-primary" />
                <CardTitle>Kelola Artikel</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">Tambah, edit, dan hapus artikel dari halaman blog.</CardDescription>
              <Button asChild variant="outline">
                <Link href="/admin/articles">
                    Lihat Artikel
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
                <Settings className="w-8 h-8 text-primary" />
                <CardTitle>Pengaturan Akun</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">Kelola akun admin yang memiliki akses.</CardDescription>
               <Button variant="outline" disabled>
                Pengaturan
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
                <LogOut className="w-8 h-8 text-destructive" />
                <CardTitle>Logout</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">Keluar dari sesi saat ini.</CardDescription>
              <form action="/api/auth/signout" method="POST">
                <Button type="submit" variant="destructive">Logout</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
