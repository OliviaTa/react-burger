import PropTypes from 'prop-types';

export const burgerConstructorPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number,
    count: PropTypes.number
});

export const tabPropTypes = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
});