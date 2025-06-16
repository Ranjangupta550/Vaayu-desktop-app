import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '10vh' }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <button onClick={goHome} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Go to Home Page
            </button>
        </div>
    );
};

export default PageNotFound;