import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rolvo — Salesforce work, delivered.",
  description:
    "Assign the work. Five specialists plan, build, test and package it. Every task comes back deployment-ready, with changes and deployment logs kept in Git.",
};

/* Marks the document as scripted before first paint, so reveal-on-scroll
   only hides content when there is JavaScript to bring it back. */
const JS_FLAG = `document.documentElement.classList.add("js")`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
