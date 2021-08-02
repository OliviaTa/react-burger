import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useHistory } from 'react-router-dom';
import NavElement from '../nav-element/nav-element';

function ProfileMenu() {
    const history = useHistory();

    const onLinkClick = () => {
        history.replace('/profile');
    };

    return (
        <>
            <NavElement
                icon={<ProfileIcon type="secondary" />}
                text="Личный кабинет"
                onLinkClick={onLinkClick}
            />
        </>
    );
}

export default ProfileMenu;