import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../auth';

/* eslint react/prop-types: 0 */
export const PublicRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    
    return (!logged)
        ? children
        : <Navigate to="/marvel" />
}
