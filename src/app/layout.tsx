import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import DejaVu fonts
const dejaVuSans = localFont({
	src: '../../public/fonts/DejaVuSans.ttf'
});

// const dejaVuSansMono = localFont({
// 	src: '../../public/fonts/dejavusans.ttf'
// });

export const metadata: Metadata = {
  title: "Recipe book",
  description: "A collection of recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={dejaVuSans.className + ' text-xl'}
      >
        {children}
      </body>
    </html>
  );
}
