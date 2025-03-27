import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate, useParams } from 'react-router-dom';

// Initial colors (you can keep this as a default data in Colors.js if needed)
const initialColors = [
  { name: 'red', hex: '#ff0000' },
  { name: 'green', hex: '#00ff00' },
  { name: 'blue', hex: '#0000ff' }
];

function App() {
  const [colors, setColors] = useState(initialColors);  // Store colors in state

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ColorList colors={colors} setColors={setColors} />} />
        <Route path="/colors" element={<ColorList colors={colors} setColors={setColors} />} />
        <Route path="/colors/:colorName" element={<ColorDetails colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm setColors={setColors} />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </Router>
  );
}

function ColorList({ colors, setColors }) {
  const navigate = useNavigate();

  const handleColorClick = (colorName) => {
    navigate(`/colors/${colorName}`);
  };

  return (
    <div>
      <h1>Color List</h1>
      <ul>
        {colors.map((color) => (
          <li key={color.name} onClick={() => handleColorClick(color.name)}>
            <span>{color.name}</span>
          </li>
        ))}
      </ul>
      <Link to="/colors/new">
        <button>Add New Color</button>
      </Link>
    </div>
  );
}

function ColorDetails({ colors }) {
  const { colorName } = useParams();
  const navigate = useNavigate(); // Move useNavigate here, before any conditional logic
  const color = colors.find((c) => c.name === colorName);

  // Redirect if color doesn't exist
  if (!color) {
    return <Navigate to="/colors" />;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>{color.name}</h2>
      <div style={{ backgroundColor: color.hex, width: '100px', height: '100px' }}></div>
      <p>HEX: {color.hex}</p>
      <button onClick={handleGoBack}>Back</button>
    </div>
  );
}

function NewColorForm({ setColors }) {
  const [color, setColor] = useState('#ffffff');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new color object
    const newColor = { name: `newColor${Date.now()}`, hex: color };

    // Add the new color to the state
    setColors((prevColors) => [newColor, ...prevColors]);

    // Navigate back to color list
    navigate('/colors');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Color</h2>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit">Add Color</button>
    </form>
  );
}

export default App;
