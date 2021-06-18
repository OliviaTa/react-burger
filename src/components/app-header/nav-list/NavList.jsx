import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import NavElement from '../nav-element/NavElement';
import styles from './NavList.module.css';

class NavList extends React.Component {
    state = {
        activeLink: 'constructor'
    };

    onLinkClick = (name) => {
        this.setState({ activeLink: name });
    };

    render() {
        return (
            <nav>
                <ul className={styles.navList}>
                    <li className="mr-2">
                        <NavElement
                            icon={<BurgerIcon type={this.state.activeLink === 'constructor' ? "primary" : "secondary"} />}
                            text="Конструктор"
                            isActive={this.state.activeLink === 'constructor'}
                            name="constructor"
                            onLinkClick={this.onLinkClick}
                        />
                    </li>
                    <li>
                        <NavElement
                            icon={<ListIcon type={this.state.activeLink === 'ribbon' ? "primary" : "secondary"} />}
                            text="Лента заказов"
                            isActive={this.state.activeLink === 'ribbon'}
                            name="ribbon"
                            onLinkClick={this.onLinkClick}
                        />
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavList;