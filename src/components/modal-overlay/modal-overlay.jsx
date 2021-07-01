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

export default ModalOverlay;