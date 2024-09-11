'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Tech Savvy | ACET </title>
        <meta name="google-site-verification" content="mcomaJmxXoyGe-uuCRa0rp_zqqcST2IID0XeGLjJ3AU" />
        <meta name="description" content="Explore the evolution of technology at Tech Time Museum. Discover interactive 3D models of iconic devices like CPUs, printers, and telephones. Experience hands-on exhibits, educational content, and virtual tours showcasing the advancements that have shaped our world."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/imgs/logo.png" />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
