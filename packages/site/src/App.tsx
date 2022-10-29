import { FunctionComponent, ReactNode, useContext } from 'react';
import styled from 'styled-components';
import { Footer, Header } from './components';

import { GlobalStyle } from './config/theme';
import { ToggleThemeContext } from './Root';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/index';

export type AppProps = {
  children: ReactNode;
};

export const App: FunctionComponent<AppProps> = ({ children }) => {
  const toggleTheme = useContext(ToggleThemeContext);

  return (
    <>
    <Router>
        
      <Routes>
        
        <Route path="/" element={<Index />} />
      </Routes>
        
      </Router>
    </>
  );
};
