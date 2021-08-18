import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { getUser, signIn } from '../services/actions/auth';
import styles from './home.module.css';

export function LoginPage() {
    const dispatch = useDispatch();
    const { state } = useHistory().location;

    const [form, setForm] = useState({ email: '', password: '' });
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const { user, signInSuccess } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onIconClick = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const onClick = (e) => {
        e.preventDefault();
        dispatch(signIn(form));
    };

    if (user) {
        return (
            <Redirect
                to={state?.from || '/'}
            />
        );
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={onClick} className={`${styles.form} mb-20`}>
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
                    error={!signInSuccess}
                    errorText={signInSuccess ? '' : 'Неверный пароль или e-mail'}
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