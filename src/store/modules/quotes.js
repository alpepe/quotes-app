import axios from 'axios';

const GET_QUOTES = 'GET_QUOTES';
const GET_QUOTES_FULFILLED = 'GET_QUOTES_FULFILLED';
const REMOVE_QUOTE = 'REMOVE_QUOTE'

const DEFAULT_STATE = {
    values: []
};

export default function(state=DEFAULT_STATE, action) {

    if (action.type === GET_QUOTES_FULFILLED) {
        return {...state, values: action.payload.data.data}
    }

    if (action.type === REMOVE_QUOTE) {
        return {...state, values: state.values.filter((el) => el.id !== action.payload)}
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