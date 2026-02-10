import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Meetkumar Mistry | ASP.NET Core & Angular Full Stack Developer",
  description: "Portfolio of Meetkumar Mistry, a backend-focused Full Stack Developer specializing in secure, scalable web systems using Angular, ASP.NET Core, and MERN stack.",
  keywords: ["Full Stack Developer", "ASP.NET Core Developer", "Angular Developer", "MERN Stack", "Backend Engineer", "Software Engineer", "Web Development", "Secure Web Applications", "REST API Development"],
  openGraph: {
    title: "Meetkumar Mistry | ASP.NET Core & Angular Full Stack Developer",
    description: "Building scalable, secure, and production-ready web applications with modern architecture.",
    type: "website",
    locale: "en_US",
    url: "https://meet-portfolio.vercel.app",
    siteName: "Meetkumar Mistry",
    images: [
      {
        url: "/og-image.png", // Ensure this exists or is a placeholder
        width: 1200,
        height: 630,
        alt: "Meetkumar Mistry Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meetkumar Mistry | Full Stack Developer",
    description: "Building scalable, secure, and production-ready web applications.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico", // Ensure this path is correct if favicon exists
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased min-h-screen flex flex-col selection:bg-primary/30 selection:text-white`}>
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black opacity-40"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>
        </div>

        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
