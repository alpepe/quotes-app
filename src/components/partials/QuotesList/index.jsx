import React from 'react';
import * as actions from '../../../store/modules/quotes';
import { connect } from 'react-redux';
import Quotes from './Quote';
import './QuotesListSyle.scss';

const NUMBER_OF_COLUMNS = 2;

const sortАscending = (a, b) => ((a > b) ? 1 : -1)
const sortDescending = (a, b) => ((a < b) ? 1 : -1)

class QuotesList extends React.Component {

    handleRemoveQuote = (id) => {
        this.props.dispatch(actions.removeQuote(id))
    } 

    render() {
        const { quotes, sortingFilter, ascSortingDirection, searchBarValue, isMobile } = this.props

        if (quotes.length === 0) {
            return null;
        }

        const isSearchApplied = searchBarValue.length > 1;
        const quotesForProcessing = isSearchApplied
            ? quotes.filter((quote) => quote.content.toLowerCase().includes(searchBarValue))
            : quotes;

        if (isSearchApplied && quotesForProcessing.length === 0) {
            return <div className="quotes-list-no-results" >No results found</div>
        }

        //added 'concat()' to avoid muting the 'quotesForProcessing'
        const sortedQuotes = quotesForProcessing.concat().sort((a, b) => ascSortingDirection
            ? sortАscending(a.participant[sortingFilter], b.participant[sortingFilter])
            : sortDescending(a.participant[sortingFilter], b.participant[sortingFilter])
        );

        const numberOfColumns = isMobile ? 1 : NUMBER_OF_COLUMNS;
        const quotesByColumns = [...(Array(numberOfColumns).keys())]
            .map(columnIndex => sortedQuotes.filter((_, quoteIndex) => columnIndex === quoteIndex % numberOfColumns));

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
    quotes: state.quotes.values,
    sortingFilter: state.quotes.sortingFilter,
    ascSortingDirection: state.quotes.ascendingSortingDirections[state.quotes.sortingFilter],
    searchBarValue: state.quotes.searchBarValue,
    isMobile: state.ui.isMobile
});

export default connect(mapStateToProps)(QuotesList)