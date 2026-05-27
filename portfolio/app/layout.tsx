import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaibhav Magoo Portfolio",

  description:
    "MBA | MSc | PMP | CFA Level 1 | Business Analysis | Data Analytics",

  openGraph: {
    title: "Vaibhav Magoo Portfolio",

    description:
      "Business Analysis | Data Analytics | Financial Analytics",

    url: "https://vaibhavmagooportfolio.vercel.app/",

    siteName: "Vaibhav Magoo Portfolio",

    images: [
      {
        url: "https://vaibhavmagooportfolio.vercel.app/Banner.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Vaibhav Magoo Portfolio",

    description:
      "MBA | MSc | PMP | CFA Level 1",

    images: [
      "https://vaibhavmagooportfolio.vercel.app/Banner.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}