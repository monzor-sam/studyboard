"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
<<<<<<< HEAD
import { useSession, signOut } from "next-auth/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/groups", label: "Groups" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  return (
    <nav className="flex items-center justify-between border-b px-6 py-4">
      <div className="flex items-center gap-6">
        <span className="font-bold text-lg text-pink-800">StudyBoard</span>
        <div className="flex gap-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "font-semibold text-pink-600"
                    : "text-gray-600 hover:text-pink-600"
                }
              >
                {link.label}
              </Link>
            );
          })}
          {status === "authenticated" && (
            <Link
              href="/groups/new"
              className={
                pathname === "/groups/new"
                  ? "font-semibold text-pink-600"
                  : "text-gray-600 hover:text-pink-600"
              }
            >
              New Group
            </Link>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm">
        {status === "authenticated" ? (
          <>
            <span className="text-gray-600">Hello, {session?.user?.name}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-gray-600 hover:text-pink-600"
            >
              Sign Out
            </button>
          </>
        ) 
        : 
        (
          <>
            <Link href="/login" className="text-gray-600 hover:text-pink-600">
              Log In
            </Link>
            <Link href="/register" className="text-gray-600 hover:text-pink-600">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
=======

const links = [
    {href: "/", label: "Home"},
    {href: "/groups", label: "Groups"},
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="flex items-center gap-6 border-b px-8 py-5 mb-10 w-full">
            <span className="font-bold text-lg text-pink-400">Studyboard</span>
            <div className="flex gap-5">
                {
                    links.map((link) => {
                        const isActive = pathname === link.href ? "text-pink-500" : "text-gray-600";
                        return (
                            <Link 
                                key={link.href} 
                                href={link.href}
                                className={
                                    isActive
                                    ? "text-pink-300"
                                    : "text-gray-600"
                                }
                            >
                                {link.label}
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
    );
}
>>>>>>> 641aad2650ce991ae14c58f433dc2a40c0546a92
