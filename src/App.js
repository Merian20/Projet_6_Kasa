import HomeLocation from './components/Home/Home.js';
import Location from './components/Location/Location.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import APropos from './components/APropos/APropos.js';
import ErrorPage from './components/ErrorPage/ErrorPage.js'

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<HomeLocation />} />
            <Route path="/location/:id" element={<Location />} />
            <Route path='/APropos' element={<APropos />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    </Router>
  );
}

export default App