import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';

function ModalOverlay({ onClick, children }) {
    const onOverlayClick = (event) => {
        if (event.target === event.currentTarget) onClick();
    }

    return (
        <div className={styles.modalOverlay} onClick={onOverlayClick}>
            {children}
        </div>
    );
}

ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.element
};

export default ModalOverlay;