import React from 'react';
import store from '../../store';
import * as actions from '../../store/modules/quotes';
import QuotesList from '../partials/QuotesList';
import SortButtons from '../partials/SortButtons';

class MainLayout extends React.Component {

    componentDidMount() {
        store.dispatch(actions.getQuotes());
    }

    render() {

        return (
            <div>
                <SortButtons />
                <QuotesList />
            </div>
            );
        }
    }

export default MainLayout;
