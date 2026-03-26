import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vijayendra Sai | Software Developer",
  description: "Personal portfolio of Vijayendra Sai, showcasing problem-solving mindset and modern development skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
