import { ReactNode } from "react";

import { Header } from "@/block";
import { sourceSans } from "@/lib/fonts";

import "./globals.css";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<html lang="fr">
			<body className={sourceSans.className}>
				<Header />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
