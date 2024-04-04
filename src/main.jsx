import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Store from './pages/store/Store';
import App from './App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'store',
        element: <Store />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
