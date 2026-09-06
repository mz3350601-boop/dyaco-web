import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DYACO | Cabinet & Interior",
  description: "طراحی و اجرای کابینت و دکوراسیون داخلی",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}