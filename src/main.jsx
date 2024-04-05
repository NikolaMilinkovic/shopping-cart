import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Store from './pages/store/Store';
import App from './App';
import { NotificationDataProvider } from './components/Contexts/NotificationDataProvider';

const router = createBrowserRouter([
    {
        path: '/',
        element:(
            <NotificationDataProvider>
                <App />
            </NotificationDataProvider>
        ) ,
    },
    {
        path: 'store',
        element: <Store />,
    },
    {
        path: 'cart',
        // element: <Cart />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
