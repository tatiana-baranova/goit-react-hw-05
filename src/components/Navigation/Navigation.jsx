import clsx from 'clsx';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <NavLink className={buildLinkClass} to="/">Home</NavLink>
                <NavLink className={buildLinkClass} to="/movies">Movie</NavLink>
            </nav>
        </header>
    )
};

export default Navigation;
