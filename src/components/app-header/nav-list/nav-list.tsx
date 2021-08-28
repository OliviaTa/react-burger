import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import NavElement from '../nav-element/nav-element';
import styles from './nav-list.module.css';

function NavList() {
    const history = useHistory();
    const location = useLocation();

    const [activeLink, setActiveLink] = useState<string>('/');

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const menu = [
        {
            name: 'constructor',
            text: 'Конструктор',
            icon: BurgerIcon,
            path: '/'
        },
        {
            name: 'ribbon',
            text: 'Лента заказов',
            icon: ListIcon,
            path: '/feed'
        }
    ];

    const onLinkClick = (path: string): void => {
        history.replace(path);
    };

    return (
        <ul className={styles.navList}>
            {menu.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeLink === item.path;

                return (
                    <li className={index === (menu.length - 1) ? '' : "mr-2"} key={item.name}>
                        <NavElement
                            icon={<Icon type={isActive ? "primary" : "secondary"} />}
                            text={item.text}
                            isActive={isActive}
                            path={item.path}
                            onLinkClick={onLinkClick}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

export default NavList;