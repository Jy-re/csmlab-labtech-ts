import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

function NavHeaderVisibility() {
    const location = useLocation(); // Use useLocation inside the Router component

    const isLoginPage = location.pathname === '/login';

    return (
        <div>
            {!isLoginPage && <Header />}
            {!isLoginPage && <Sidebar />}
        </div>
    );
}

export default NavHeaderVisibility;