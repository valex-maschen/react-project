import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './Navbar.module.css';

const Navbar = () => (
    <nav className={styles.Nav}>
        <ul className={styles.NavItems}>
            <li className={styles.NavItem}>
                <NavLink className={styles.NavLink} to="/" exact>
                    Главная
                </NavLink>
            </li>
            <li className={cn(styles.NavItem, styles.NavItemPadding)}>
                <NavLink className={styles.NavLink} to="/history">
                    История
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navbar;
