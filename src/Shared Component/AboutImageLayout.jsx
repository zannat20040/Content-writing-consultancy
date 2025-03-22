/* eslint-disable react/prop-types */

const AboutImageLayout = ({ img,direction ,color}) => {
    const dropShadowFilter = `drop-shadow(${direction} ${color})`;
    return (
        <img src={img} alt=""  className='w-5/6 filter drop-shadow-2xl rounded-2xl' style={{ filter: dropShadowFilter }} />
    );
};

export default AboutImageLayout;
