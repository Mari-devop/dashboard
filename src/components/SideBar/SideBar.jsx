import React, { useState, useRef, useEffect } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { menuItems } from '../../configs/menuItemConfigs';
import sprite from '../../assets/css/svg/sprite.svg';
import avatar from '../../assets/images/Ellipse 8.png';
import '../../assets/css/components/sidebar.css';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            closeSidebar();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <button className="sidebar__toggle-button" onClick={toggleSidebar}>
                Sidebar
            </button>
            <div ref={sidebarRef} className={`db-sidebar ${isOpen ? 'open' : ''}`}>
                <div className='db-sidebar__header'>
                    <div className='db-sidebar__logo'>
                        <svg className="db-sidebar_logo-icon">
                            <use href={`${sprite}#setting 1`}></use>
                        </svg>
                        <p>Dashboard</p>
                        <span className="db-sidebar_logo-small-text">v.01</span>
                    </div>
                </div>
                <div className='db-sidebar__menu'>
                    <ul>
                        {menuItems.map((item, index) => (
                            <MenuItem key={index} {...item} closeSidebar={closeSidebar} />
                        ))}
                    </ul>
                </div>
                <div className='db-sidebar__footer'>
                    <img src={avatar} alt="avatar" />
                    <div className='db-sidebar__footer-text'>
                        <p className='db-sidebar__footer-title'>Evano</p>
                        <span className='db-sidebar__footer-title-small'>Project Manager</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;
