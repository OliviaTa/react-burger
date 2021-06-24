import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import NavElement from '../nav-element/nav-element';

function ProfileMenu() {
    return (
        <>
            <NavElement
                icon={<ProfileIcon type="secondary" />}
                text="Личный кабинет"
                onLinkClick={() => false}
            />
        </>
    );
}

export default ProfileMenu;