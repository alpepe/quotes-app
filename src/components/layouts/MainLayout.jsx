import React from 'react';
import { connect } from 'react-redux';

class MainLayout extends React.Component {

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
