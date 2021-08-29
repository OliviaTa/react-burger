import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './app-header.module.css';
import NavList from './nav-list/nav-list';
import ProfileMenu from './profile-menu/profile-menu';

const AppHeader: FC = () => {
    return (
        <header className={`${styles.appHeader} pt-4 pb-4`}>
            <nav className={styles.content}>
                <NavList />
                <Link to='/'>
                    <Logo />
                </Link>
                <ProfileMenu />
            </nav>
        </header>
    );
}

export default AppHeader;