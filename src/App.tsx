import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';

import theme from './styles/themes/theme';
import GlobalStyles from './styles/global';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
