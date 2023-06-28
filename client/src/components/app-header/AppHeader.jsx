import React from 'react';

import Logo from '../logo/Logo';

import './AppHeader.sass';

const AppHeader = () => {
    return (
        <header className="app-header">
            <div className="container flx-r">
            <Logo></Logo>
            <nav className="header-nav flx-r">
                <ul className="header-nav-list flx-r">
                    <li className='header-nav-list__item'><a href="/users">users</a></li>
                </ul>
            </nav>
            </div>
        </header>
    );
};

export default AppHeader;