import type { Metadata } from "next";
import { Inter, Gochi_Hand } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });
const gochiHand = Gochi_Hand({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gochi-hand",
});

const footerSections = [
  {
    title: "Company",
    links: [
      { href: "/about", text: "About" },
      { href: "/contact", text: "Contact" },
      { href: "/privacy", text: "Privacy Policy" },
      { href: "/terms", text: "Terms of Service" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/resources", text: "All Resources" }
    ],
  },
];

export const metadata: Metadata = {
  title: "The Answers Project",
  description: "Assisting Needs Self Worth Education Resources and Safety in our community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${gochiHand.variable}`}>
        <Header />
        {children}
        <Footer sections={footerSections} />
      </body>
    </html>
  );
}