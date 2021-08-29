import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getUser, signUp } from '../services/actions/auth';
import { useDispatch, useSelector } from '../services/hooks';
import styles from './home.module.css';

export interface IRegisterForm {
    name: string;
    email: string;
    password: string;
};

export const RegistertPage: FC = () => {
    const dispatch = useDispatch();

    const [form, setForm] = useState<IRegisterForm>({ name: '', email: '', password: '' });
    const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onIconClick = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const onClick = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(signUp(form));
    };

    if (user) {
        return (
            <Redirect
                to='/'
            />
        );
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={onClick} className={`${styles.form} mb-20`}>
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