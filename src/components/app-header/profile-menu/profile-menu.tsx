import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import NavElement from '../nav-element/nav-element';

const ProfileMenu: FC = () => {
    const history = useHistory();
    const location = useLocation();

    const onLinkClick = () => {
        history.replace('/profile');
    };

    return (
        <>
            <NavElement
                isActive={location.pathname.includes('/profile')}
                icon={<ProfileIcon type="secondary" />}
                text="Личный кабинет"
                onLinkClick={onLinkClick}
            />
        </>
    );
}

export default ProfileMenu;