import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { OrdersPage } from '.';
import ProfileNav from '../components/profile-nav/profile-nav';
import { getUser, updateUser } from '../services/actions/auth';
import styles from './profile.module.css';

export function ProfilePage() {
    const dispatch = useDispatch();

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
            value: '',
            placeholder: 'Пароль',
            disabled: true
        }
    });
    const [initialForm, setInitialForm] = useState({});

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    useEffect(() => {
        const updatedForm = { ...form };
        for (const key in user) {
            if (updatedForm[key]) {
                updatedForm[key].value = user[key];
                updatedForm[key].disabled = true;
            }
        }
        setForm(updatedForm);
        setInitialForm(updatedForm);
    }, [user]);

    const onChange = e => {
        setForm({ ...form, [e.target.name]: { ...form[e.target.name], value: e.target.value } });
    };

    const onIconClick = (key) => {
        if (form[key].disabled) {
            setForm({ ...form, [key]: { ...form[key], disabled: false } });
            setTimeout(() => {
                document.querySelector(`[name=${key}]`).focus();
            }, 0);
        } else {
            setForm({ ...form, [key]: { ...form[key], value: initialForm[key].value, disabled: true } });
            setTimeout(() => {
                document.querySelector(`[name=${key}]`).blur();
            }, 0);
        }
    };

    const onCancelClick = () => {
        setForm(initialForm);
    };

    const onSaveClick = (e) => {
        e.preventDefault();

        const updatedForm = {};
        for (const key in form) {
            setForm({ ...form, [key]: { ...form[key], disabled: true } });

            if (form[key].value !== initialForm[key].value) {
                updatedForm[key] = form[key].value;
            }
        }

        if (Object.keys(updatedForm).length) {
            dispatch(updateUser(updatedForm));
        }
    };

    return (
        <div className={`${styles.wrapper} mt-30`}>
            <ProfileNav />
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
                                icon={form[key].disabled ? "EditIcon" : "CloseIcon"}
                                onChange={onChange}
                                onIconClick={() => onIconClick(key)}
                                key={key}
                            />
                        ))}
                        {Object.keys(form).filter(key => !form[key].disabled).length ? (
                            <div className={styles.actions}>
                                <div className={`${styles.cancel} mr-7`} onClick={onCancelClick}>Отмена</div>
                                <Button onClick={onSaveClick}>Сохранить</Button>
                            </div>
                        ) : null}
                    </form>
                </Route>
                <Route path="/profile/orders" exact={true}>
                    <OrdersPage />
                </Route>
            </Switch>
        </div>
    );
}