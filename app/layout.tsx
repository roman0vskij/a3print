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
			<body suppressHydrationWarning>
				<header className="w-full h-11  text-center font-montserrat text-base leading-[129%] tracking-[0.03em] font-medium">
					+7 777 130 5838
				</header>
				{children}
			</body>
		</html>
	);
}
