import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import PreloaderWrapper from "./PreloaderWrapper";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "https://hyperbyte-peach.vercel.app/"),
  keywords: "web development, mobile development, SEO, design, consulting, marketing, Hyperbyte, client solutions, business growth",
  title: "Hyperbyte | Client-Focused Product Development",
  description: "Creating tailored products for clients. Specializing in web development, mobile apps, design, SEO, marketing, and consulting.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: `${process.env.NEXT_PUBLIC_URL}/opengraph-image.png`,
    images: "/opengraph-image.png",
    siteName: "Hyperbyte",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.className} antialiased bg-black`}
      >
        <Toaster />
        <PreloaderWrapper>{children}</PreloaderWrapper>
      </body>
    </html>
  );
}
