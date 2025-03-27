import React from 'react';
import dogsData from '../dogsData';
import { useParams } from 'react-router-dom';

const DogDetails = () => {
    const { name } = useParams(); // Extracts 'name' from the URL like '/dogs/whiskey'
    const dog = dogsData.find(dog => dog.name.toLowerCase() === name.toLowerCase()); // Matching the dog name

    if (!dog) {
        return <h2>Dog not found</h2>; // In case the dog is not found
    }

    return (
        <div>
            <h1>{dog.name}</h1>
            <img src={`/${dog.src}.jpg`} alt={dog.name} />
            <p>{dog.age} years old</p>
            <ul>
                {dog.facts.map((fact, idx) => (
                    <li key={idx}>{fact}</li>
                ))}
            </ul>
        </div>
    );
};

export default DogDetails;
