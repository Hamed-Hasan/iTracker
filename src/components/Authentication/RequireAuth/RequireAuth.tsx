import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, Navigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading'



const RequireAuth = ({ children }: { children: JSX.Element }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading />
    }

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }
        } replace />;
    }

    return children;

};

export default RequireAuth;