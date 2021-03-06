import React from 'react';
import Icon from '../../shared/Icon';

import './QuotesListSyle.scss';

const Quotes = ({content, tags, participant, handleRemoveQuote, id}) => {

    return (
        <div className="quote-container">
            <div className="quote-head" >
                <Icon name='quotes' width="2.2rem" height="2.2rem" styleIcon="quote-icon" />
                <Icon name='close' width="1.6rem" height="1.6rem" styleIcon="quote-close-icon" onClick={() => handleRemoveQuote(id)}/>
            </div>
            <div className="quote-content-container">
                <div className="quote-content">
                    {content}
                </div>
                <div className="quote-tags">
                    {tags.map((tag, index) => (
                        <div key={index} className="quote-tag">
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="quote-participant-info">
                    {`${participant.name}, ${participant.age} from ${participant.nationality}`}
                </div>
            </div>
        </div>
    )
}

export default Quotes;