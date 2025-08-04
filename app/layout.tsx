import type { Metadata } from "next";
import "./globals.css";
import { bounded } from "@/fonts/fontBounded";

export const metadata: Metadata = {
  title: "A3 ПРИНТ",
  description: "Типография полного цикла в Алматы",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bounded.variable}>
      <body suppressHydrationWarning>
        <p>Типография полного цикла в Алматы</p>
        <p className="font-bounded font-thin">
          Типография полного цикла в Алматы
        </p>
        <p className="font-bounded font-extralight">
          Типография полного цикла в Алматы
        </p>
        <p className="font-bounded font-light">
          Типография полного цикла в Алматы
        </p>
        <p className="font-bounded font-normal">
          Типография полного цикла в Алматы
        </p>
        <p className="font-bounded font-medium">
          Типография полного цикла в Алматы
        </p>
        <p className="font-bounded font-semibold">
          Типография полного цикла в Алматы
        </p>
        <p className="font-bounded font-bold">
          Типография полного цикла в Алматы
        </p>
        <p className="font-bounded font-extrabold">
          Типография полного цикла в Алматы
        </p>
        <p className="font-bounded font-black">
          Типография полного цикла в Алматы
        </p>
        {children}
      </body>
    </html>
  );
}
