"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./globals.css";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

const disableLayout = ["/login", "/register"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [state, setState] = useState(0);
  return (
    <html lang="en">
      <body className={inter.className}>
        {!disableLayout.includes(pathName) && <Navbar />}
        {/* <h1>Layout {state}</h1> */}
        {/* <button
          onClick={() => {
            setState(state + 1);
          }}
        >
          Click Me
        </button> */}
        <div
          className={!disableLayout.includes(pathName) ? `mt-[4.5rem]` : `mt-0`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
