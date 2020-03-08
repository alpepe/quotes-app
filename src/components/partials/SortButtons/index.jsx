import React from 'react';
import { connect } from 'react-redux';
import SortButton from './SortButton';
import { QUOTE_FILTERS } from '../../../static/config';
import * as actions from '../../../store/modules/quotes';
import './SortButtonsStyle.scss';

const SortButtons = ({sortingFilter, ascSortingDirection, dispatch}) => {

    const handleChangeFilter = (filter) => {
        dispatch(actions.changeSelectedFilter(filter))
    }

    return (
        <div className="sort-buttons-container">
            <div className="sort-buttons-text" >Sort by:</div>
            <div className="sort-buttons-row">
                <SortButton 
                    text="Participant nationality"
                    isActive={sortingFilter === QUOTE_FILTERS.NATIONALITY}
                    handleChangeFilter={handleChangeFilter}
                    filter={QUOTE_FILTERS.NATIONALITY}
                    ascSortingDirection={ascSortingDirection[QUOTE_FILTERS.NATIONALITY]}
                />
                <SortButton 
                    text="Participant name"
                    isActive={sortingFilter === QUOTE_FILTERS.NAME}
                    handleChangeFilter={handleChangeFilter}
                    filter={QUOTE_FILTERS.NAME}
                    ascSortingDirection={ascSortingDirection[QUOTE_FILTERS.NAME]}
                />
            </div>
        </div>
        );
    }

const mapStateToProps = (state) => ({
    sortingFilter: state.quotes.sortingFilter,
    ascSortingDirection: state.quotes.ascendingSortingDirections
});

export default connect(mapStateToProps)(SortButtons)
