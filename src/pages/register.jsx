import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

export function RegistertPage() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
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
                <h1 className={styles.heading}>Регистрация</h1>
                <Input
                    type='text'
                    placeholder='Имя'
                    value={form.name}
                    name='name'
                    size='default'
                    onChange={onChange}
                />
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
                <Button type="primary" size="medium">Зарегистрироваться</Button>
            </form>
            <div className={styles.actions}>
                <p>Уже зарегистрированы? <Link className={styles.link} to='/login'>Войти</Link></p>
            </div>
        </div>
    );
}