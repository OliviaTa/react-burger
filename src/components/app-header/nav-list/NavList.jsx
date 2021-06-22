import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import NavElement from '../nav-element/NavElement';
import styles from './NavList.module.css';

class NavList extends React.Component {
    state = {
        activeLink: 'constructor'
    };

    menu = [
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

    onLinkClick = (name) => {
        this.setState({ activeLink: name });
    };

    render() {
        return (
            <ul className={styles.navList}>
                {this.menu.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = this.state.activeLink === item.name;

                    return (
                        <li className={index === (this.menu.length - 1) ? '' : "mr-2"} key={item.name}>
                            <NavElement
                                icon={<Icon type={isActive ? "primary" : "secondary"} />}
                                text={item.text}
                                isActive={isActive}
                                name={item.name}
                                onLinkClick={this.onLinkClick}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default NavList;