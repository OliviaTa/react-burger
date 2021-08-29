import PropTypes from 'prop-types';
import { FC } from 'react';
import styles from './nav-element.module.css';


interface INavElementProps {
    icon: JSX.Element;
    text: string;
    isActive?: boolean;
    path?: string;
    onLinkClick: (path: string) => void;
};

const NavElement: FC<INavElementProps> = ({ icon, text, isActive = false, path = '/', onLinkClick }) => {
    const elementClick = () => {
        onLinkClick(path);
    };

    return (
        <div
            className={`
                ${isActive ? styles.active : ''} 
                ${styles.element} 
                pl-5 pr-5 text_color_inactive`}
            onClick={elementClick}>
            {icon} {text}
        </div>
    );
}

NavElement.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    path: PropTypes.string,
    onLinkClick: PropTypes.func.isRequired
}

export default NavElement;