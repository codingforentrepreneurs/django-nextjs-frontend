import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/authProvider";

import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/themeProvider";
import BaseLayout from "@/components/layout/BaseLayout";
import { Suspense } from "react";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Django <> NextJS SaaS Platform",
  description: "Django <> NextJS SaaS Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider 
              attribute="class"
              defaultTheme="dark"
          >
          <AuthProvider>
            <BaseLayout className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col bg-muted/40">
                {children}
            </BaseLayout>
          </AuthProvider>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
