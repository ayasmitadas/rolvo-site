import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rolvo — a Selectiva product",
  description:
    "Staff projects with role-based AI agents in Salesforce. Receive compiled, packaged, deployable work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
