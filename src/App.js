import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteList from './routes/routeList';

//---------------------------- General     CSS ----------------------------------------------------------------------
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//---------------------------- main   --------------------------------------------------------------------------------
const App = () => {
    return (
        <>
            <Router>
                <RouteList/>
            </Router>
        </>
    );
}

export default App;
