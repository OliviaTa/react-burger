import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';

function Modal({ header = null, isOpen, onClose, children }) {
    const closeOnEscKeyDown = (event) => {
        if (event.key === 'Escape') onClose();
    };

    React.useEffect(() => {
        document.addEventListener('keydown', closeOnEscKeyDown);

        return () => {
            document.removeEventListener('keydown', closeOnEscKeyDown);
        };
    }, []);

    return ReactDOM.createPortal(
        isOpen &&
        <ModalOverlay onClick={onClose}>
            <div className={`${styles.modal} pt-10 pb-15 text`}>
                <header className={`${styles.header} mr-10 ml-10`}>
                    <h1 className='text text_type_main-large'>{header}</h1>
                    <CloseIcon type="primary" onClick={onClose} />
                </header>
                {children}
            </div>
        </ModalOverlay>
        , document.body);
}

Modal.propTypes = {
    header: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element
};

export default Modal;