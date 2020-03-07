import React from 'react';
import * as actions from '../../../store/modules/quotes';
import { connect } from 'react-redux';
import Quotes from './Quote';
import './QuotesListSyle.scss';

const NUMBER_OF_COLUMN = 2;

class QuotesList extends React.Component {

    handleRemoveQuote = (id) => {
        this.props.dispatch(actions.removeQuote(id))
    } 

    render() {
        const { quotes } = this.props

        if (quotes.length === 0) {
            return null;
        }

        const quotesByColumns = [...(Array(NUMBER_OF_COLUMN).keys())]
            .map(columnIndex => quotes.filter((_, quoteIndex) => columnIndex === quoteIndex % NUMBER_OF_COLUMN));

        return (
            <div className='quotes-list-container'>
                {quotesByColumns.map((quotesColumn, index) => (
                    <div key={index} className="quotes-list-column">
                        {quotesColumn.map((quote) => (
                            <Quotes
                                key={quote.id}
                                id={quote.id}
                                content={quote.content}
                                tags={quote.tags}
                                participant={quote.participant}
                                handleRemoveQuote={this.handleRemoveQuote}
                            />
                        ))}
                    </div>
                ))}
            </div>
            );
        }
    }

const mapStateToProps = (state) => ({
    quotes: state.quotes.values
});

export default connect(mapStateToProps)(QuotesList)