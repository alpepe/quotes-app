import React from 'react';
import classnames from 'classnames';
import Icon from '../../shared/Icon';
import './SortButtonsStyle.scss';

const SortButton = ({text, isActive, ascSortingDirection, handleChangeFilter, filter}) => {
    const iconId = ascSortingDirection ? 'arrow-up': 'arrow-down';
    const containerStyle = classnames('sort-button-container', {'sort-button-container-active': isActive});

    return (
        <div className={containerStyle} onClick={() => handleChangeFilter(filter)}>
            <div>{text}</div>
            <Icon name={iconId} width="1.5rem" height="1.5rem" styleIcon="sort-button-icon" />
        </div>
    )
}

export default SortButton;