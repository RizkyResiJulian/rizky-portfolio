import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rizky Resi Julian — Informatics Engineer",
  description: "Interactive portfolio of Rizky Resi Julian: Web Development, AI, Data and IT Support.",
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body>{children}</body></html>}
