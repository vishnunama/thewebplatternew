import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veltrix - Professional Web Development Services",
  description: "Building amazing digital experiences with modern technology. E-commerce, custom websites, and enterprise solutions.",
  metadataBase: new URL('https://thewebplatternew-pncb.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://veltrix.com",
    siteName: "Veltrix",
    title: "Veltrix - Professional Web Development Services",
    description: "Building amazing digital experiences with modern technology",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/veltrix-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Veltrix - Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@veltrix",
    title: "Veltrix - Professional Web Development Services",
    description: "Building amazing digital experiences with modern technology",
    images: ["https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/veltrix-vue.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}