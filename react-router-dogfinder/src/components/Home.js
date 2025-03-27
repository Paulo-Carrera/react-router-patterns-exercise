import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const goToDogs = () => {
        navigate("/dogs"); 
    }
    return (
        <div>
            <h1>Welcome to Dogs R Us</h1>
            <button onClick={goToDogs}>To Dogs Page</button>
        </div>
    );
}

export default Home;