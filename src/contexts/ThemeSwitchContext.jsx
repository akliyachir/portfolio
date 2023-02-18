import { createContext, useState } from 'react';

export const ThemeSwitchContext = createContext(false);

import React from 'react';
export default function ThemeSwitchContextProvider({ children }) {
	const [isLightOn, setisLightOn] = useState(false);
	return (
		<ThemeSwitchContext.Provider value={{ isLightOn, setisLightOn }}>
			{children}
		</ThemeSwitchContext.Provider>
	);
}
