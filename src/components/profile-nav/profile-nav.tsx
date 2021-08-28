import { useMemo } from 'react';
import { useDispatch } from '../../services/hooks';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { signOut } from '../../services/actions/auth';
import styles from './profile-nav.module.css';

const ProfileNav = () => {
    const pathname = useLocation().pathname;
    const dispatch = useDispatch();

    const navLinks = [
        {
            id: 'profile',
            path: '/profile',
            text: 'Профиль',
            caption: 'изменить свои персональные данные'
        },
        {
            id: 'orders',
            path: '/profile/orders',
            text: 'История заказов',
            caption: 'просмотреть свою историю заказов'
        }
    ];

    const activeLink = useMemo<string>(() => {
        const path = pathname.split('/');
        return path[path.length - 1];
    }, [pathname]);

    const onExitClick = () => {
        dispatch(signOut());
    };

    return (
        <nav className={styles.nav}>
            <ul className='text text_type_main-medium mb-20'>
                {navLinks.map(item =>
                    <li className={`${activeLink === item.id ? styles.active : ''} ${styles.link}`} key={item.id}>
                        <Link
                            to={item.path}
                        >
                            {item.text}
                        </Link>
                    </li>
                )}
                <li className={styles.link} onClick={onExitClick}>Выход</li>
            </ul>
            <div className={styles.caption}>
                В этом разделе вы можете<br />
                {navLinks.filter(({ id }) => id === activeLink).map(({ caption }) => caption)}
            </div>
        </nav>
    );
};

export default ProfileNav;