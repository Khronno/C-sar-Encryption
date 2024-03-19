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
			<body className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500">
				<HomePage />
			</body>
		</html>
	);
}
