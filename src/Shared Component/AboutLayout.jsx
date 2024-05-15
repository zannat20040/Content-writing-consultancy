import React from 'react';
import ButtonLayout from './ButtonLayout';

const AboutLayout = ({h1TagOpeninng, pTagopening}) => {
    return (
        <div className='max-w-sm '>
            <h1 className='text-outfit leading-10 mb-5 text-3xl text-white font-medium'>{h1TagOpeninng}</h1>
            <p className='text-inter mb-10 text-B7B8BB'>{pTagopening}</p>
            <ButtonLayout label={'Start 14 Days Free Trial'}/>
        </div>
    );
};

export default AboutLayout;