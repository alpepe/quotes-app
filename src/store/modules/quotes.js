import axios from 'axios';
import { QUOTE_FILTERS } from '../../static/config'

const GET_QUOTES = 'GET_QUOTES';
const GET_QUOTES_FULFILLED = 'GET_QUOTES_FULFILLED';
const REMOVE_QUOTE = 'REMOVE_QUOTE';
const CHANGE_SELECTED_FILTER = 'CHANGE_SELECTED_FILTER';

const DEFAULT_STATE = {
    values: [],
    sortingFilter: QUOTE_FILTERS.NATIONALITY,
    ascendingSortingDirections: {
        [QUOTE_FILTERS.NATIONALITY]: true,
        [QUOTE_FILTERS.NAME]: false
    }

};

export default function(state=DEFAULT_STATE, action) {

    if (action.type === GET_QUOTES_FULFILLED) {
        return {...state, values: action.payload.data.data}
    }

    if (action.type === REMOVE_QUOTE) {
        return {...state, values: state.values.filter((el) => el.id !== action.payload)}
    }

    if (action.type === CHANGE_SELECTED_FILTER) {
        const filter = action.payload;
        const isFilterSelected = state.sortingFilter === filter;

        return {...state,
            sortingFilter: filter,
            ascendingSortingDirections: {
                ...state.ascendingSortingDirections,
                [filter]: isFilterSelected && !state.ascendingSortingDirections[filter]}
        }
    }


    return state;
}

export const getQuotes = () => ({
    type: GET_QUOTES,
    payload: axios.get('http://localhost:3001/api')
});

export const removeQuote = (id) => ({
    type: REMOVE_QUOTE,
    payload: id
});

export const changeSelectedFilter = (filter) => ({
    type: CHANGE_SELECTED_FILTER,
    payload: filter
})