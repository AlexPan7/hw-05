import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const body = document.querySelector('body');
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      body.classList.remove('dark', 'light');
      body.classList.add(savedTheme);
      setTheme(savedTheme);
    } else {
      body.classList.add(theme);
    }
  }, []);

  useEffect(() => {
    body.classList.remove('dark', 'light');
    body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = () => useContext(ThemeContext);
