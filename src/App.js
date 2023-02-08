import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState(localStorage.theme);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => {
      return prevState === 'dark' ? 'light' : 'dark'
    });
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <button onClick={handleToggleTheme}>Toggle</button>
      {theme === 'dark' && (
        <Layout
          onToggleTheme={handleToggleTheme}
          selectedTheme={theme}
        />
      )}
    </ThemeProvider>
  );
};

export default App;
