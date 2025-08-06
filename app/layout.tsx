import type { Metadata } from "next";
import "./globals.css";
import { bounded } from "@/fonts/fontBounded";
import { montserrat } from "@/fonts/fontMontserrat";
import { Header } from "@/components/widgets/header";
import { Footer } from "@/components/widgets/footer";

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
			<body suppressHydrationWarning>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
