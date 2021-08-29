import { FC } from 'react';
import styles from './modal-overlay.module.css';

interface IModalOverlayProps {
    onClick: () => void;
};

const ModalOverlay: FC<IModalOverlayProps> = ({ onClick, children }) => {
    const onOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) onClick();
    }

    return (
        <div className={styles.modalOverlay} onClick={onOverlayClick}>
            {children}
        </div>
    );
}

export default ModalOverlay;