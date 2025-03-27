import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DogList from './components/DogList';
import DogDetails from './components/DogDetails';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Good luck!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<DogList />} />
          <Route path="/dogs/:name" element={<DogDetails />} />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
