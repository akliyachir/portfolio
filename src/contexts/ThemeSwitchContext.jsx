import { Children, createContext, useState } from 'react';

export const ThemeSwitchContext = createContext(null);

import React from 'react';
const [isLightOn, setisLightOn] = useState(false);
export default function ThemeSwitchContext({ Children }) {
	return (
		<ThemeSwitchContext.Provider value={{ isLightOn, setisLightOn }}>
			{Children}
		</ThemeSwitchContext.Provider>
	);
}
