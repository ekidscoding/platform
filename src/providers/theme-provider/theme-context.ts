import { createContext } from 'react';

import { ThemeProviderState } from './types';

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export default ThemeProviderContext;

