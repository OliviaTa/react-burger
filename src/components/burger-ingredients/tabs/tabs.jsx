import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { tabPropTypes } from '../../../utils/propTypesShapes';
import styles from './tabs.module.css';

function Tabs({ data, activeTab, onClick }) {
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

Tabs.propTypes = {
    data: PropTypes.arrayOf(tabPropTypes.isRequired),
    activeTab: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Tabs;