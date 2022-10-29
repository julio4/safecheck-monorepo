import Header from './components/Header';
import Insights from './pages/Insights';
import Contracts from './pages/Contracts';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './css/Root.css'

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Contracts />} />
          <Route path='contracts' element={<Contracts />} />
          <Route path='insights' element={<Insights />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;