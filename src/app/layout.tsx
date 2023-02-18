import './globals.css';
import HeaderContainer from '../components/1-HeaderContainer/HeaderContainer';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head />
			<body>
				<HeaderContainer />
				<main>{children}</main>
				<footer>hola</footer>
			</body>
		</html>
	);
}
