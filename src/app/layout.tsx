import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import ApolloGraphqlProvider from "./providers/ApolloGraphqlProvider";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "KoiKeibo",
  description: `A budgeting tool based on a Japanese saving method. The word can be translated as "household ledger" and is meant for household financial management. Kakeibo vary in structure, but the basic idea is the same`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ApolloGraphqlProvider>
          <SessionProvider>{children}</SessionProvider>
        </ApolloGraphqlProvider>
      </body>
    </html>
  );
}
