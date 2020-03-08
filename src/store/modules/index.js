import { combineReducers } from 'redux';
import quotes from './quotes.js'
import ui from './ui.js'

export default combineReducers({
    quotes,
    ui
});