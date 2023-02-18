import { createContext, useState, useEffect } from 'react';

export const WindowWidthContext = createContext(0);

export default function WindowWidthProvider({ children }) {
	const [WindowWidthValue, setWindowWidthValue] = useState(0);
	useEffect(() => {
		setWindowWidthValue(window.innerWidth);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowWidthValue(window.innerWidth);
		});
		return window.removeEventListener('resize', () => {
			setWindowWidthValue(window.innerWidth);
		});
	});

	return (
		<WindowWidthContext.Provider value={WindowWidthValue}>
			{children}
		</WindowWidthContext.Provider>
	);
}
