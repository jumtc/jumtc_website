"use client";
//? importing necessary packages
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // global css
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Theme from "./theme"; // imported theme for mui
import Navbar from "../components/navbar"; // navbar component // parallax provider
// import metadata from "@/utils/metadata"; //metadata for the website

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <link rel="icon" href={metadata.icons.icon} /> */}
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="description" content="Hi" />
				<title>JUMTC</title>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<AppRouterCacheProvider>
					{/* Wrapping with theme */}
					<Theme>
						{/* Wrapping with parallax */}
						<Navbar
							sx={{
								position: "absolute",
								top: 0,
								left: 0,
								zIndex: 1000,
							}}
						/>
						{children}
					</Theme>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
