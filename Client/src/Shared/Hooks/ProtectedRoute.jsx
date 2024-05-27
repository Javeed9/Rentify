import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './index';

const ProtectedRoute = () => {
    const { isAdmin } = useAuth();
    const location = useLocation();
    const [readyToNavigate, setReadyToNavigate] = useState(false);

    useEffect(() => {
        console.log(isAdmin, "first");
        if (!isAdmin) {
            console.log(isAdmin, "second");
            setTimeout(() => {
                setReadyToNavigate(true);
            }, 1000);
        } else {
            setReadyToNavigate(true);
        }
    }, [isAdmin]);

    if (!isAdmin && readyToNavigate) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!readyToNavigate) {
        return null;
    }

    return <Outlet />;
};

export default ProtectedRoute;
