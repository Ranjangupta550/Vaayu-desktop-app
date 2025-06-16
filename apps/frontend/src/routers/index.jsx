import {createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/components';
import { PageNotFound } from '@/pages';
// import {Home} from '@/pages';
// import { NotFound } from '@/pages/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                // element: <Home />, // Uncomment and import Home component when available
                element: <div>Home Page</div> // Placeholder for Home component 
            },
            {
                path: '*',
                element: <PageNotFound />  
            }
        ]
    }
]);
export default router;