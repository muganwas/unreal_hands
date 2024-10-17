import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

export default function Devices() {
    const location = useLocation();
    console.log({ location })
    return (
        <div className="page-container">
            <Header />

        </div>
    )
}