import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Tabs.module.css';

class Tabs extends React.Component {
    render() {
        return (
            <div className={`${styles.tabs} mb-10`}>
                {this.props.data.map((item) => {
                    const isActive = this.props.activeTab === item.id;
                    const onTabClick = () => {
                        this.props.clickFunc(item.id);
                    }

                    return (
                        <Tab
                            value={item.id}
                            key={item.id}
                            active={isActive}
                            onClick={onTabClick}
                        >
                            {item.title}
                        </Tab>
                    );
                })}
            </div>
        );
    }
}

export default Tabs;