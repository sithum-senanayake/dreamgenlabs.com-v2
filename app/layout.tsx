import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DreamGen Labs",
  description: "DreamGen Labs is a IT company where we provide web development,software development,mobile app development and digital marketing services while solving problems with innovative solutions.",
  keywords: ["Next.js", "React", "JavaScript", "SoftwareDevelopment", "Web Development,Mobile App Development,FullStack Web Development,Technology,IT,Software Engineering,Cloud Computing,Database Management,Frontend Development,Backend Development,UI/UX Design,SEO,SEM,PPC,Content Marketing,Email Marketing,Social Media Marketing,Influencer Marketing,Web Development Company,Software Development Company,Mobile App Development Company,IT Company,Technology Company,Software Engineering Company,Cloud Computing Company,Database Management Company,Frontend Development Company,Backend Development Company,UI/UX Design Company,SEO Company,SEM Company,PPC Company,Content Marketing Company,Email Marketing Company,Social Media Marketing Company,Influencer Marketing Company,Web Development Services,Software Development Services,Mobile App Development Services,IT Services,Technology Services,Software Engineering Services,Cloud Computing Services,Database Management Services,Frontend Development Services,Backend Development Services,UI/UX Design Services,SEO Services,SEM Services,PPC Services,Content Marketing Services,Email Marketing Services,Social Media Marketing Services,Influencer Marketing Services,Web Development Company Services,Software Development Company Services,Mobile App Development Company Services,IT Company Services,Technology Company Services,Software Engineering Company Services,Cloud Computing Company Services,Database Management Company Services,Frontend Development Company Services,Backend Development Company Services,UI/UX Design Company Services,SEO Company Services,SEM Company Services,PPC Company Services,Content Marketing Company Services,Email Marketing Company Services,Social Media Marketing Company Services,Influencer Marketing Company Services,Web Development Services Services,Software Development Services Services,Mobile App Development Services Services,IT Services Services,Technology Services Services,Software Engineering Services Services,Cloud Computing Services Services,Database Management Services Services,Frontend Development Services Services,Backend Development Services Services,UI/UX Design Services Services,SEO Services Services,SEM Services Services,PPC Services Services,Content Marketing Services Services,Email Marketing Services Services,Social Media Marketing Services Services,Influencer Marketing Services Services,Web Development Company Services Services,Software Development Company Services Services,Mobile App Development Company Services Services,IT Company Services Services,Technology Company Services Services,Software Engineering Company Services Services,Cloud Computing Company Services Services,Database Management Company Services Services,Frontend Development Company Services Services,Backend Development Company Services Services,UI/UX Design Company Services Services,SEO Company Services Services,SEM Company Services Services,PPC Company Services Services,Content Marketing Company Services ,Email Marketing Company  Services,Social Media Marketing Company Services,Influencer Marketing Company Services Services,Web Development Services Services Services,Software Development Services ,Mobile App Development Services "],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-black text-white overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
