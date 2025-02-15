import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientLayout from "@/src/components/ClientLayout"; // Import the client layout

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helper Buddy",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
