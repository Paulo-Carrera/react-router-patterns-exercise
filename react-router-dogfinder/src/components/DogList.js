import React, { useState, useEffect } from 'react';

const DogList = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/dogs')
      .then(response => response.json())
      .then(data => setDogs(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Dog List</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.name}>
            <h3>{dog.name}</h3>
            <img src={`/${dog.src}.jpg`} alt={dog.name} />
            <p>{dog.age} years old</p>
            <ul>
              {dog.facts.map((fact, idx) => (
                <li key={idx}>{fact}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;

