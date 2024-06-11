import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../assets/css/svg/sprite.svg';

const MenuItem = ({ to, icon, text, showSmallIcon, closeSidebar }) => {
    return (
        <li onClick={closeSidebar}>
            <Link to={to}>
                <svg className="db-sidebar_menu-icon">
                    <use href={`${sprite}#${icon}`}></use>
                </svg>
                <span>{text}</span>
                {showSmallIcon && (
                    <svg className="db-sidebar_menu-icon-small">
                        <use href={`${sprite}#chevron-right 2`}></use>
                    </svg>
                )}
            </Link>
        </li>
    );
};

export default MenuItem;
