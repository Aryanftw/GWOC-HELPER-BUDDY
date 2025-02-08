"use client";

import { usePathname } from "next/navigation";
import { CartProvider } from "@/src/context/CartContext";
import Navbar from "@/src/components/ui/Navbar";
import ProgressProvider from "@/src/components/ProgressSidebar";
import CustomCursor from "@/src/components/ui/CustomCursor";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = ["/auth/login", "/auth/register"].includes(pathname);

  return (
    <CartProvider>
      <ProgressProvider /> {/* NProgress runs here */}
      <CustomCursor/>
      <div className="flex-1">
        {!isAuthPage && <Navbar />} {/* Hide Navbar on login/register */}
        {children}
      </div>
    </CartProvider>
  );
}
