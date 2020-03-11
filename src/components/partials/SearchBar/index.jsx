import React from 'react';
import { connect } from 'react-redux';
import Icon from '../../shared/Icon';
import * as actions from '../../../store/modules/quotes';
import './SearchBar.scss';

const SearchBar = ({searchBarValue, dispatch}) => {

    const handleChange = (e) => {
        dispatch(actions.updateSearchBarValue(e.target.value.toLowerCase()))
    }

    return (
        <div className="search-bar-container">
            <Icon name="magnifier" width="2.2rem" height="2.2rem" styleIcon="search-bar-icon" />
            <input
                type="text"
                onChange={handleChange}
                value={searchBarValue}
                placeholder="Search"
                className="search-bar-input"
            />
        </div>
        );
    }

const mapStateToProps = (state) => ({
    searchBarValue: state.quotes.searchBarValue
});

export default connect(mapStateToProps)(SearchBar)
