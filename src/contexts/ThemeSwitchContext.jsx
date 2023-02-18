import { createContext, useState } from 'react';

export const ThemeSwitchContext = createContext(null);

import React from 'react';
const [isLightOn, setisLightOn] = useState(false);
export default function ThemeSwitchContextProvider({ children }) {
	return (
		<ThemeSwitchContext.Provider value={{ isLightOn, setisLightOn }}>
			{children}
		</ThemeSwitchContext.Provider>
	);
}
