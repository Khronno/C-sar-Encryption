import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomePage from "./page";

export const metadata: Metadata = {
	title: "Decodificador",
	description: "An project to decode text from a input",
};

export default function RootLayout() {
	return (
		<html lang="en">
			<body className="bg-blue-100 backdrop-blur-lg">
				<HomePage />
			</body>
		</html>
	);
}
