import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/modules/quotes';
import * as uiActions from '../../store/modules/ui';
import QuotesList from '../partials/QuotesList';
import SortButtons from '../partials/SortButtons';
import SearchBar from '../partials/SearchBar';
import './MainLayout.scss';

class MainLayout extends React.Component {

    setMobileViewFormat = () => {
        if (window.innerWidth > 600 && this.props.isMobile) {
            this.props.dispatch(uiActions.disableMobileView());
        }

        if (window.innerWidth <= 600 && !this.props.isMobile) {
            this.props.dispatch(uiActions.enableMobileView());
        }
    }

    componentDidMount() {
        this.props.dispatch(actions.getQuotes());
        window.addEventListener('resize', this.setMobileViewFormat);
    }

    render() {

        return (
            <div className="main-layout-container">
                <SearchBar />
                <SortButtons />
                <QuotesList />
            </div>
            );
        }
    }

const mapStateToProps = (state) => ({
    isMobile: state.ui.isMobile
});

export default connect(mapStateToProps)(MainLayout)
