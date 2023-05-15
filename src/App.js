import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import ManikarnikaGhat from './components/pages/ManikarnikaGhat';
import LastRites from './components/pages/LastRites';
import MahaMritunjay from './components/pages/MahaMritunjay';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/manikarnika-ghat' element={<ManikarnikaGhat />} />
          <Route path='/last-rites' element={<LastRites />} />
          <Route path='/maha-mritunjay' element={<MahaMritunjay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
