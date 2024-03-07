import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthContext from "./contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SAMS",
  description: "Sams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} color="#57BEBB" />
        <AuthContext>{children}</AuthContext>
      </body>
    </html>
  );
}
