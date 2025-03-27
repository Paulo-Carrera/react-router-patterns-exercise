import React from 'react';
import { Route } from 'react-router-dom';
import DogList from './components/DogList';

const Routes = () => {
    return (
        <div>
            <Route exact path="/dogs" component={DogList} />

        </div>
    );
}

export default Routes;