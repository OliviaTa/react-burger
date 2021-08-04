import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCallback, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { resetPassword } from '../utils/api';
import styles from './home.module.css';

export function ResetPasswordPage() {
    const { state } = useHistory().location;

    const [form, setForm] = useState({ password: '', token: '' });
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onIconClick = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const reset = useCallback(e => {
        e.preventDefault();
        resetPassword(form)
            .then(res => {
                console.log(res);
            });
    }, [form]);

    if (state?.from !== '/forgot-password') {
        return (
            <Redirect
                to='/'
            />
        );
    }

    return (
        <div className={styles.wrapper}>
            <form className={`${styles.form} mb-20`}>
                <h1 className={styles.heading}>Восстановление пароля</h1>
                <Input
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder='Введите новый пароль'
                    value={form.password}
                    name='password'
                    icon={isPasswordVisible ? 'HideIcon' : 'ShowIcon'}
                    size='default'
                    onChange={onChange}
                    onIconClick={onIconClick}
                />
                <Input
                    type='text'
                    placeholder='Введите код из письма'
                    value={form.token}
                    name='token'
                    size='default'
                    onChange={onChange}
                />
                <Button type="primary" size="medium" onClick={reset}>Сохранить</Button>
            </form>
            <div className={styles.actions}>
                <p>Вспомнили пароль? <Link className={styles.link} to='/login'>Войти</Link></p>
            </div>
        </div>
    );
}