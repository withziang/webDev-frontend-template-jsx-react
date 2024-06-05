import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';


//----------------------------    Import Pages   ----------------------------------------------------------------


const Layout = React.lazy(() => import('../layout/layout'));
const HomePage = React.lazy(() => import('../pages/board-pages/homePage'));
//----------------------------    Routes  ----------------------------------------------------------------

const RouteList = () => (
    <>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route element={<Layout />}>
                    <Route exact path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </Suspense>
    </>
);

export default RouteList;
