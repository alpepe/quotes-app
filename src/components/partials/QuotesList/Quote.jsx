import React from 'react';
import Icon from '../../shared/Icon';
import './QuotesListSyle.scss';

const Quotes = ({content, tags, participant}) => {

    return (
        <div className="quote-container">
            <div className="quote-head" >
                <Icon name='quotes' width="30px" height="30px" styleIcon="quote-icon" />
                <Icon name='close' width="30px" height="30px" styleIcon="quote-close-icon" />
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