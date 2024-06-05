import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteList from './routes/routeList';

//---------------------------- General     CSS ----------------------------------------------------------------------
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//---------------------------- main   --------------------------------------------------------------------------------
const App = () => {
    return (
        <>
            <BrowserRouter>
                <RouteList/>
            </BrowserRouter>
        </>
    );
}

export default App;
