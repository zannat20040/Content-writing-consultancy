import React from 'react';

const AboutImageLayout = ({ img,direction ,color}) => {
    const dropShadowFilter = `drop-shadow(${direction} ${color})`;
    return (
        <img src={img} alt="" className='w-full filter drop-shadow-2xl' style={{ filter: dropShadowFilter }} />
    );
};

export default AboutImageLayout;
