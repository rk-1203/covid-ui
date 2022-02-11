import { Suspense, lazy } from 'react';
import { Route, Routes as Switch, BrowserRouter } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import { ROUTES } from './constants/constant';

const Dashboard = lazy(() => import('./views/Dashboard/Dashboard'));

function Routes() {
    return (
        <Suspense fallback={<Loader />}>
            <BrowserRouter basename='/'>
                <Switch>
                    <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                </Switch>
            </BrowserRouter>
        </Suspense>
    )
}

export default Routes