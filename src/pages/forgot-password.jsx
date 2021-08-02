import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { recoveryPassword } from '../utils/api';
import styles from './home.module.css';

export function ForgotPasswordPage() {
    const [form, setForm] = useState({ email: '' });

    const history = useHistory();

    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const recovery = useCallback(e => {
        e.preventDefault();
        recoveryPassword(form)
            .then(res => {
                if (res.success) {
                    history.replace('/reset-password');
                }
            });
    }, [form, history]);

    return (
        <div className={styles.wrapper}>
            <form className={`${styles.form} mb-20`}>
                <h1 className={styles.heading}>Восстановление пароля</h1>
                <Input
                    type='email'
                    placeholder='Укажите e-mail'
                    value={form.email}
                    name='email'
                    size='default'
                    onChange={onChange}
                />
                <Button type="primary" size="medium" onClick={recovery}>Восстановить</Button>
            </form>
            <div className={styles.actions}>
                <p>Вспомнили пароль? <Link className={styles.link} to='/login'>Войти</Link></p>
            </div>
        </div>
    );
}