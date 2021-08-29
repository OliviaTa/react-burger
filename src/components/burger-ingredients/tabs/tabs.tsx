import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';
import { TTabItem } from '../../../types/app.types';
import styles from './tabs.module.css';

interface ITabsProps {
    data: Array<TTabItem>;
    activeTab: string;
    onClick: (value: string) => void;
};

const Tabs: FC<ITabsProps> = ({ data, activeTab, onClick }) => {
    return (
        <nav className={`${styles.tabs} mb-10`}>
            {data.map((item) => {
                return (
                    <Tab
                        value={item.id}
                        key={item.id}
                        active={activeTab === item.id}
                        onClick={onClick}
                    >
                        {item.title}
                    </Tab>
                );
            })}
        </nav>
    );
}

export default Tabs;