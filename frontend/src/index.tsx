import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import LandingPage from './pages/LandingPage'; // Ensure this path matches the actual file location
import ContactList from './pages/ContactList'; // Ensure this path matches the actual file location

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/contacts" element={<ContactList />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);