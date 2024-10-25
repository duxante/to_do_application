import Navigation from './features/navigation/navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './features/home/home';
import Create from './features/create/create';
import List from './list/list';
import './App.css';
import About from './features/about/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/list" element={<List />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
