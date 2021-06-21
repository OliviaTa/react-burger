import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Tabs.module.css';

function Tabs(props) {
    return (
        <div className={`${styles.tabs} mb-10`}>
            {props.data.map((item) => {
                const isActive = props.activeTab === item.id;
                const onTabClick = () => {
                    props.clickFunc(item.id);
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

export default Tabs;