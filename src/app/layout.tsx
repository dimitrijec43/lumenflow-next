import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import CursorAnimation from '@/components/CursorAnimation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LumenFlow - Master Your Day, Your Way. Simply.",
  description: "LumenFlow is where intelligent design meets uncomplicated organization. Tailor every focus session to your unique rhythm, accompanied by hand-picked music that elevates your concentration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-neutral-900 text-neutral-100 antialiased`}>
        <ClientLayout>
          <CursorAnimation />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
