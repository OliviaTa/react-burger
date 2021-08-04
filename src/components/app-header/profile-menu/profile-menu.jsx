import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useHistory, useLocation } from 'react-router-dom';
import NavElement from '../nav-element/nav-element';

function ProfileMenu() {
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