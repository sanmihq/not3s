import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Not3s",
  description: "A note-taking app for organizing your thoughts and ideas.",
  applicationName: "Not3s",
  generator: "Next.js",
  // author: "Sanmi AKinwunmi",
  keywords: ["note-taking", "organization", "productivity"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} max-w-[100rem] mx-auto`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
