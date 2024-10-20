import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '300', '500', '600', '700', '900'],
})

export const metadata = {
	title: 'Startuplair',
	description:
		'Startuplair is a cutting-edge digital marketing agency dedicated to empowering businesses with innovative strategies for growth. From SEO and content marketing to social media and paid advertising, we provide tailored solutions to help brands thrive in the digital landscape.',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={poppins.className}
			>
				{children}
			</body>
		</html>
	)
}
