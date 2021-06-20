import styles from './NavElement.module.css';

function NavElement({ icon, text, isActive = false, name = '', onLinkClick }) {
    const elementClick = () => {
        onLinkClick(name);
    };

    return (
        <div className={`${styles.element} pl-5 pr-5`} onClick={elementClick}>
            {icon}
            <p className={`${isActive ? styles.active : ''} text_color_inactive ml-2`}>{text}</p>
        </div>
    );
}

export default NavElement;