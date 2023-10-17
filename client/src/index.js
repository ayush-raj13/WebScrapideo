import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NavigationProvider } from './context/navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NavigationProvider>
        <App className=" text-gray-800 dark:bg-gray-800 dark:text-gray-200" />
    </NavigationProvider>
);
