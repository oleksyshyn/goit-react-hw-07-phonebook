import React from 'react';
import { setFilter } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter() {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
    }

    return (
        <div>
            <p className={css.filter_title} >Find contacts by name</p>
            <input
                type="text"
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    )
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
};