import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ওবিবাহিত.কম - Coming Soon | Bangladeshi Islamic Matrimony",
  description:
    "Bangladesh's premier Islamic matrimony platform. আমাদের ওয়েবসাইট নির্মাণাধীন রয়েছে। শীঘ্রই আসছে ইন শা আল্লাহ।",
  keywords: "Islamic matrimony, Bangladesh, বিবাহ, মুসলিম বিবাহ, ইসলামিক বিবাহ",
  authors: [{ name: "Obibahito.com Team" }],
  creator: "Obibahito.com",
  publisher: "Obibahito.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "ওবিবাহিত.কম - Coming Soon",
    description: "Bangladesh's premier Islamic matrimony platform coming soon",
    siteName: "Obibahito.com",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ওবিবাহিত.কম - Coming Soon",
    description: "Bangladesh's premier Islamic matrimony platform coming soon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansBengali.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
