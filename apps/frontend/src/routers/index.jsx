import {createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/components';
import { PageNotFound,Dashboard,MissionPlan } from '@/pages';
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                // path: '/dashboard',
                element: <Dashboard />,
            },
            {
                path: '/mission-plan',
                element: <MissionPlan />
            },

            {
                path: '*',
                element: <PageNotFound />  
            }
        ]
    }
]);
export default router;