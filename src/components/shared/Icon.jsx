import React from 'react';

const Icon = ({ name, width, height, styleIcon, onClick }) => (
    <div onClick={onClick} className={styleIcon}>
        <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg'>
            <use xlinkHref={`./iconsSprite.svg#${name}`} />
        </svg>
    </div>
);

export default Icon;