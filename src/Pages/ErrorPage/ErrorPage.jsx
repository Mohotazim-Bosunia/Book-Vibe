import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <h1>Page is not found</h1>
            <Link to='/'>Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;