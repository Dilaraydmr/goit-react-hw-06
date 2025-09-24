import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filterValue = useSelector(selectNameFilter);

    const handleChange = e => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div className={styles.searchBox}>
            <label className={styles.label}>
                Search:
                <input
                    type="text"
                    value={filterValue}
                    onChange={handleChange}
                    className={styles.input}
                />
            </label>
        </div>
    );
};

export default SearchBox;