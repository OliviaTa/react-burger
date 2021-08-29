import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { OrdersPage } from '.';
import ProfileNav from '../components/profile-nav/profile-nav';
import { getUser, updateUser } from '../services/actions/auth';
import { useDispatch, useSelector } from '../services/hooks';
import { TUser } from '../types/state.types';
import styles from './profile.module.css';

export interface IProfileFormField {
    value: string;
    placeholder: string;
    disabled: boolean;
};

type FormFields = 'name' | 'email' | 'password';

export type TProfileForm<T = IProfileFormField> = {
    [ff in FormFields]: T;
};

export const ProfilePage: FC = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.user);
    const [form, setForm] = useState<TProfileForm>({
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
    const [initialForm, setInitialForm] = useState<TProfileForm>(form);

    const formKeys = Object.keys(form) as FormFields[];

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    useEffect(() => {
        if (user) {
            const updatedForm = { ...form };

            const userKeys = Object.keys(user) as (keyof TUser)[];
            for (const key of userKeys) {
                if (updatedForm[key]) {
                    updatedForm[key].value = user[key];
                    updatedForm[key].disabled = true;
                }
            }
            setForm(updatedForm);
            setInitialForm(updatedForm);
        }
    }, [user]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetName = e.target.name as FormFields;
        setForm({ ...form, [targetName]: { ...form[targetName], value: e.target.value } });
    };

    const onIconClick = (key: FormFields) => {
        if (form[key].disabled) {
            setForm({ ...form, [key]: { ...form[key], disabled: false } });
            setTimeout(() => {
                const formElement = document.querySelector(`[name=${key}]`) as HTMLInputElement;
                formElement.focus();
            }, 0);
        } else {
            setForm({ ...form, [key]: { ...form[key], value: initialForm[key].value, disabled: true } });
            setTimeout(() => {
                const formElement = document.querySelector(`[name=${key}]`) as HTMLInputElement;
                formElement.blur();
            }, 0);
        }
    };

    const onCancelClick = () => {
        setForm(initialForm);
    };

    const onSaveClick = () => {
        //e.preventDefault();

        const updatedForm = {} as TProfileForm<string>;
        for (const key of formKeys) {
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
                        {formKeys.map(key => (
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
                        {formKeys.filter(key => !form[key].disabled).length ? (
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