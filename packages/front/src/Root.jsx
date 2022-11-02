import NavBar from './components/NavBar';
import SimulationResult from './pages/SimulationResult';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

const Root = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path='contract/:address' element={<SimulationResult />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default Root;
