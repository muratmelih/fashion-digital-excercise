import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "./components/Nav";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product List",
  description: "Fashion Digital Exercise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrimeReactProvider>
          <Nav></Nav>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
