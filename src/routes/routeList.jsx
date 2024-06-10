import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';


//----------------------------    Import Pages   ----------------------------------------------------------------


<<<<<<< HEAD


=======
>>>>>>> ec626781e10ccab02e903ff49d471a318e6ffe73
const Layout = React.lazy(() => import('../layout/layout'));
const HomePage = React.lazy(() => import('../pages/board-pages/homePage'));

const ErrorPage = React.lazy(() => import('../pages/utility-pages/errorPage'));
const LoadingPage = React.lazy(() => import('../pages/utility-pages/loadingPage'));
//----------------------------    Routes  ----------------------------------------------------------------

const RouteList = () => (
    <>
        <Suspense fallback={<LoadingPage/>}>
            <Routes>
                <Route element={<Layout />}>
                    <Route exact path="/" element={<HomePage />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Suspense>
    </>
);

export default RouteList;
