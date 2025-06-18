import {createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/components';
import { PageNotFound,Dashboard } from '@/pages';
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
                path: '*',
                element: <PageNotFound />  
            }
        ]
    }
]);
export default router;