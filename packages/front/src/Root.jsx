import Header from './components/Header';
import Insights from './pages/Insights';
import SimulationResult from './pages/SimulationResult';
import Contracts from './pages/Contracts';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import './css/Root.css'

const Root = () => {
  

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
            <Route path='contracts/:address' element={<Contracts />} />
            <Route path='insights' element={<Insights />} />
            <Route path='SimulationResult' element={<SimulationResult />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
   );
};

export default Root;