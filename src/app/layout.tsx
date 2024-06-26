import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="p-2">
          <nav className="border-2 border-blue-600 flex h-full w-full p-5 rounded-md bg-blue-600">
            <ul className="p-2 w-full flex flex-row gap-2">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/search"}>Search</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex grow  flex-col items-center justify-between p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
