import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {},
});

const THEME_STORAGE_KEY = 'APP_THEME';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(systemTheme || 'light');

  useEffect(() => {
    (async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme === 'light' || savedTheme === 'dark') {
          setTheme(savedTheme);
        } else {
          setTheme(systemTheme || 'light');
        }
      } catch (error) {
        console.warn('Error reading theme from storage:', error);
      }
    })();
  }, [systemTheme]);


  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
