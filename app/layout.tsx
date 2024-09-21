import type { Metadata } from "next";
import { ubuntu, ubuntuMono } from "@/@types/font/Font";
import "./globals.css";
import { ThemeProvider } from "@/components/themes/theme-provider";
import Nav from "@/components/webcomp/navigation/Nav";
import { Providers } from "./providers";
import Footer from "@/components/webcomp/footer/Footer";

export const metadata: Metadata = {
	title: "Maa Tarini Electrical",
	description:
		"Maa Tarini Electrical is an electrical shop based in Cuttack, Odisha. We offer complete range of electrical services.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange>
						<div>
							<Nav />
						</div>
						<div
							className={`${ubuntu.variable} ${ubuntuMono.variable} antialiased bgImage`}>
							{children}
						</div>
						<div>
							<Footer />
						</div>
					</ThemeProvider>
				</Providers>
			</body>
		</html>
	);
}
