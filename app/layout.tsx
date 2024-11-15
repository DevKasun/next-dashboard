import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './css/globals.css';

const getNunitoSans = localFont({
	src: [
		{
			path: './fonts/NunitoSansLight.woff',
			weight: '300',
			style: 'normal',
		},
		{
			path: './fonts/NunitoSansExtraLight.woff',
			weight: '200',
			style: 'normal',
		},
		{
			path: './fonts/NunitoSansBold.woff',
			weight: '700',
			style: 'normal',
		},
		{
			path: './fonts/NunitoSansMedium.woff',
			weight: '500',
			style: 'normal',
		},
		{
			path: './fonts/NunitoSansRegular.woff',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-nunito-sans', // This creates a CSS variable
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Next JS Dashboard',
	description: 'A dashboard built with Next.js',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${getNunitoSans.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
