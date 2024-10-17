import Navigation from './features/navigation/navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './features/home/home';
import Create from './features/create/create';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
