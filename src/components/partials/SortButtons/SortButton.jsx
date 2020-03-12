import React from 'react';
import classnames from 'classnames';
import Icon from '../../shared/Icon';
import './SortButtonsStyle.scss';

const SortButton = ({text, isActive, ascSortingDirection, handleChangeFilter, filter}) => {
    const containerStyle = classnames('sort-button-container', {'sort-button-container-active': isActive});
    const styleIcon = classnames('sort-button-icon', {'sort-button-icon-down': !ascSortingDirection});

    return (
        <div className={containerStyle} onClick={() => handleChangeFilter(filter)}>
            <div>{text}</div>
            <Icon name={'arrow-up'} width="1.6rem" height="1.6rem" styleIcon={styleIcon} />
        </div>
    )
}

export default SortButton;