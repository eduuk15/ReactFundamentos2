import React, { useState, useMemo, useEffect, useLayoutEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState(localStorage.theme);

  const firstRender = useRef(true);

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

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return
    }

    console.debug({ theme });
  }, [theme])

  useLayoutEffect(() => {
    for (let i = 0; i <= 5; i++) {
      console.debug(i);
    }
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout
        onToggleTheme={handleToggleTheme}
        selectedTheme={theme}
      />
    </ThemeProvider>
  );
};

export default App;
