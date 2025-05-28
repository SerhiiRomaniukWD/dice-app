import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import HydrationGuard from "../components/guard";

const robotSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dice",
  description: "A simple dice roller app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotSans.variable}`}>
        <AppRouterCacheProvider>
          <HydrationGuard>{children}</HydrationGuard>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
