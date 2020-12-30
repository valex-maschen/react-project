import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => (
    <nav className={styles.Nav}>
        <ul className={styles.NavItems}>
            <li className={styles.NavItem}>
                <NavLink className={styles.NavLink} to="/" exact>
                    Главная
                </NavLink>
            </li>
            <li className={styles.NavItem}>
                <NavLink className={styles.NavLink} to="/history">
                    История
                </NavLink>
            </li>
        </ul>
    </nav>
);
