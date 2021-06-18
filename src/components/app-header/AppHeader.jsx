import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import NavList from './nav-list/NavList';
import ProfileMenu from './profile-menu/ProfileMenu';
import styles from './AppHeader.module.css';

function AppHeader() {
    return (
        <header className={`${styles.appHeader} pt-4 pb-4`}>
            <div className={styles.content}>
                <NavList />
                <Logo />
                <ProfileMenu />
            </div>
        </header>
    );
}

export default AppHeader;