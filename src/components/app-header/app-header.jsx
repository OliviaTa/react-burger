import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import NavList from './nav-list/nav-list';
import ProfileMenu from './profile-menu/profile-menu';
import styles from './app-header.module.css';

function AppHeader() {
    return (
        <header className={`${styles.appHeader} pt-4 pb-4`}>
            <nav className={styles.content}>
                <NavList />
                <Logo />
                <ProfileMenu />
            </nav>
        </header>
    );
}

export default AppHeader;