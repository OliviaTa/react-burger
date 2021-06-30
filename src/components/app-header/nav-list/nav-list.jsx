import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import NavElement from '../nav-element/nav-element';
import styles from './nav-list.module.css';

function NavList() {
    const [activeLink, setActiveLink] = React.useState('constructor');

    const menu = [
        {
            name: 'constructor',
            text: 'Конструктор',
            icon: BurgerIcon
        },
        {
            name: 'ribbon',
            text: 'Лента заказов',
            icon: ListIcon
        }
    ];

    const onLinkClick = (name) => {
        setActiveLink(name);
    };

    return (
        <ul className={styles.navList}>
            {menu.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeLink === item.name;

                return (
                    <li className={index === (menu.length - 1) ? '' : "mr-2"} key={item.name}>
                        <NavElement
                            icon={<Icon type={isActive ? "primary" : "secondary"} />}
                            text={item.text}
                            isActive={isActive}
                            name={item.name}
                            onLinkClick={onLinkClick}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

export default NavList;