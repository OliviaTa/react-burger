import styles from './NavElement.module.css';
import PropTypes from 'prop-types';

function NavElement({ icon, text, isActive = false, name = '', onLinkClick }) {
    const elementClick = () => {
        onLinkClick(name);
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
    name: PropTypes.string,
    onLinkClick: PropTypes.func.isRequired
}

export default NavElement;