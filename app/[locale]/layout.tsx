import type { Metadata } from "next";
import "./globals.css";
import { bounded } from "@/fonts/fontBounded";
import { montserrat } from "@/fonts/fontMontserrat";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "A3 ПРИНТ",
  description: "Типография полного цикла в Алматы",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${bounded.variable} ${montserrat.variable}`}
    >
      <body suppressHydrationWarning>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
