import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { OrdersPage } from '.';
import { getUser, signOut, updateUser } from '../services/actions/auth';
import styles from './profile.module.css';

export function ProfilePage() {
    const dispatch = useDispatch();

    const [activeLink, setActiveLink] = useState('profile');
    const user = useSelector(state => state.auth.user);
    const [form, setForm] = useState({
        name: {
            value: '',
            placeholder: 'Имя',
            disabled: true
        },
        email: {
            value: '',
            placeholder: 'Логин',
            disabled: true
        },
        password: {
            value: '******',
            placeholder: 'Пароль',
            disabled: true
        }
    });

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    useEffect(() => {
        const updatedForm = { ...form };
        for (const key in user) {
            if (updatedForm[key]) {
                updatedForm[key].value = user[key];
            }
        }
        setForm(updatedForm);
    }, [user]);

    const navLinks = [
        {
            id: 'profile',
            path: '/profile',
            text: 'Профиль',
            caption: 'изменить свои персональные данные'
        },
        {
            id: 'orders',
            path: '/profile/orders',
            text: 'История заказов',
            caption: 'просмотреть свою историю заказов'
        }
    ];

    const onExitClick = () => {
        dispatch(signOut());
    };

    const onChange = e => {
        setForm({ ...form, [e.target.name]: { ...form[e.target.name], value: e.target.value } });
    };

    const onIconClick = (key) => {
        setForm({ ...form, [key]: { ...form[key], disabled: false } });
        setTimeout(() => {
            document.querySelector(`[name=${key}]`).focus();
        }, 0);
    };

    const onBlur = e => {
        setForm({ ...form, [e.target.name]: { ...form[e.target.name], disabled: true } });
        dispatch(updateUser({
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className={`${styles.wrapper} mt-30`}>
            <nav className={styles.nav}>
                <ul className='text text_type_main-medium mb-20'>
                    {navLinks.map(item =>
                        <li className={`${activeLink === item.id ? styles.active : ''} ${styles.link}`} key={item.id}>
                            <Link
                                to={item.path}
                                onClick={() => setActiveLink(item.id)}
                            >
                                {item.text}
                            </Link>
                        </li>
                    )}
                    <li className={styles.link} onClick={onExitClick}>Выход</li>
                </ul>
                <div className={styles.caption}>
                    В этом разделе вы можете<br />
                    {navLinks.filter(({ id }) => id === activeLink).map(({ caption }) => caption)}
                </div>
            </nav>
            <Switch>
                <Route path="/profile" exact={true}>
                    <form className={styles.form}>
                        {Object.keys(form).map(key => (
                            <Input
                                type={key === 'password' ? "password" : "text"}
                                placeholder={form[key].placeholder}
                                value={form[key].value}
                                name={key}
                                disabled={form[key].disabled}
                                icon="EditIcon"
                                onChange={onChange}
                                onIconClick={() => onIconClick(key)}
                                onBlur={onBlur}
                                key={key}
                            />
                        ))}
                    </form>
                </Route>
                <Route path="/profile/orders" exact={true}>
                    <OrdersPage />
                </Route>
            </Switch>
        </div>
    );
}