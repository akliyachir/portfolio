import { createContext, useState, useEffect } from 'react';

export const WindowWidthContext = createContext(340);

export default function WindowWidthProvider({ children }) {
	const [WindowWidthValue, setWindowWidthValue] = useState(340);
	// -- window size at load
	useEffect(() => {
		setWindowWidthValue(globalThis.innerWidth);
	}, []);

	// -- window size at resize
	useEffect(() => {
		globalThis.addEventListener('resize', () => {
			setWindowWidthValue(globalThis.innerWidth);
		});
		return globalThis.removeEventListener('resize', () => {
			setWindowWidthValue(globalThis.innerWidth);
		});
	});
	// -- context provider
	return (
		<WindowWidthContext.Provider value={WindowWidthValue}>
			{children}
		</WindowWidthContext.Provider>
	);
}
