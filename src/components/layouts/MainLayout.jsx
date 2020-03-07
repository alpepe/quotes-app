import React from 'react';
import * as actions from '../../store/modules/quotes';
import { connect } from 'react-redux';

class MainLayout extends React.Component {

    componentDidMount() {
        this.props.dispatch(actions.getQuotes());
    }

    render() {
        console.log(this.props.quotes)
        return (
            <div>
                Quotes APP
            </div>
            );
        }
    }

export default connect(state => ({
    quotes: state.quotes.values
}))(MainLayout)
