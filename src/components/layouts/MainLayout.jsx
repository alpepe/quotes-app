import React from 'react';
import store from '../../store';
import * as actions from '../../store/modules/quotes';
import QuotesList from '../partials/QuotesList';
import SortButtons from '../partials/SortButtons';
import SearchBar from '../partials/SearchBar'

class MainLayout extends React.Component {

    componentDidMount() {
        store.dispatch(actions.getQuotes());
    }

    render() {

        return (
            <React.Fragment>
                <SearchBar />
                <SortButtons />
                <QuotesList />
            </React.Fragment>
            );
        }
    }

export default MainLayout;
