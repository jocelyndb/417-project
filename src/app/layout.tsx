import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jocelyn Baker",
  description: "Project for CPSC 417",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={manrope.className}>{children}</body>
</html>
)
    ;
}
