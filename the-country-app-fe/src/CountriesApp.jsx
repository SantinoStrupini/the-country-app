import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CountriesProvider } from './context/Countries';
import { CountriesPage } from './pages/CountriesPage';
import { CountriesDetailPage } from './pages/CountriesDetailPage';

export const CountriesApp = () => {
    return (
        <CountriesProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/countries" />} />
                    <Route path="/countries" element={<CountriesPage />} />
                    <Route path="/countries/:countryCode" element={<CountriesDetailPage />} />
                </Routes>
            </Router>
        </CountriesProvider>
    );
};