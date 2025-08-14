import type { Metadata } from "next";
import "./globals.css";
import { bounded } from "@/fonts/fontBounded";
import { montserrat } from "@/fonts/fontMontserrat";

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
		<html lang="en" className={`${bounded.variable} ${montserrat.variable}`}>
			<body suppressHydrationWarning>{children}</body>
		</html>
	);
}
