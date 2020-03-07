import React from 'react';
import store from '../../store';
import * as actions from '../../store/modules/quotes';
import QuotesList from '../partials/QuotesList';

class MainLayout extends React.Component {

    componentDidMount() {
        store.dispatch(actions.getQuotes());
    }

    render() {

        return (
            <div>
                <QuotesList />
            </div>
            );
        }
    }

export default MainLayout;
