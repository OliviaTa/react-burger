import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from '../services/hooks';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { getUser } from '../services/actions/auth';
import { recoveryPassword } from '../utils/api';
import styles from './home.module.css';

export interface IForgotPasswordForm {
    email: string;
};

export function ForgotPasswordPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [form, setForm] = useState<IForgotPasswordForm>({ email: '' });
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const recovery = useCallback(e => {
        e.preventDefault();
        recoveryPassword(form)
            .then(res => {
                if (res.success) {
                    history.replace({
                        pathname: '/reset-password',
                        state: {
                            from: '/forgot-password'
                        }
                    });
                }
            });
    }, [form, history]);

    if (user) {
        return (
            <Redirect
                to='/'
            />
        );
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={recovery} className={`${styles.form} mb-20`}>
                <h1 className={styles.heading}>Восстановление пароля</h1>
                <Input
                    type='email'
                    placeholder='Укажите e-mail'
                    value={form.email}
                    name='email'
                    size='default'
                    onChange={onChange}
                />
                <Button type="primary" size="medium">Восстановить</Button>
            </form>
            <div className={styles.actions}>
                <p>Вспомнили пароль? <Link className={styles.link} to='/login'>Войти</Link></p>
            </div>
        </div>
    );
}