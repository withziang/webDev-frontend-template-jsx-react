import React from 'react';
import { Routes, Route } from 'react-router-dom';


//----------------------------    Import Pages   ----------------------------------------------------------------


import Layout from "../layout/layout";
import HomePage from "../pages/board-pages/homePage";

//----------------------------    Routes  ----------------------------------------------------------------

const RouteList = () => (
    <>

        <Routes>
            <Route element={<Layout/>}>
                *<Route exact path="/" element={<HomePage />} />

            </Route>
        </Routes>
    </>
);

export default RouteList;