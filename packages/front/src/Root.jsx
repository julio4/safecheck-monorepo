import NavBar from './components/NavBar';
import SimulationResult from './pages/SimulationResult';
import Contracts from './pages/Contracts';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import './css/Root.css'

const Root = () => {
  

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Contracts />} />
            <Route path='contracts/:address' element={<Contracts />} />
            <Route path='SimulationResult' element={<SimulationResult />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
   );
};

export default Root;