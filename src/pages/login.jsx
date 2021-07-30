import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

export function LoginPage() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onIconClick = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className={styles.wrapper}>
            <form className={`${styles.form} mb-20`}>
                <h1 className={styles.heading}>Вход</h1>
                <Input
                    type='email'
                    placeholder='E-mail'
                    value={form.email}
                    name='email'
                    size='default'
                    onChange={onChange}
                />
                <Input
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder='Пароль'
                    value={form.password}
                    name='password'
                    icon={isPasswordVisible ? 'HideIcon' : 'ShowIcon'}
                    size='default'
                    onChange={onChange}
                    onIconClick={onIconClick}
                />
                <Button type="primary" size="medium">Войти</Button>
            </form>
            <div className={styles.actions}>
                <p>Вы — новый пользователь? <Link className={styles.link} to='/register'>Зарегистрироваться</Link></p>
                <p>Забыли пароль? <Link className={styles.link} to='/forgot-password'>Восстановить пароль</Link></p>
            </div>
        </div>
    );
}