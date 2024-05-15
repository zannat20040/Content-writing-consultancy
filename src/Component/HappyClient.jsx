import React from 'react';
import logo from '../assets/Client/Logo.png';
import logo1 from '../assets/Client/Logo (1).png';
import logo2 from '../assets/Client/Logo (2).png';
import logo3 from '../assets/Client/Logo (3).png';
import logo4 from '../assets/Client/Logo (4).png';
import logo5 from '../assets/Client/Logo (5).png';
import logo6 from '../assets/Client/Logo (6).png';
import logo7 from '../assets/Client/Logo (7).png';

const HappyClient = () => {
    const clientLogos = [
        { clientImg: logo3 },
        { clientImg: logo2 },
        { clientImg: logo1 },
        { clientImg: logo },
        { clientImg: logo7 },
        { clientImg: logo6 },
        { clientImg: logo5 },
        { clientImg: logo4 }
    ];

    return (
        <div className=' py-16'>
            <p className='font-outfit text-2xl text-white text-center'>Trusted by nearly 5000+ paying customers</p>
            
            <div className='grid grid-cols-4 gap-12 justify-center items-center max-w-2xl mx-auto mt-16 '>
                {clientLogos.map((data, index) => (
                    <img src={data.clientImg} alt="" key={index} className='filter opacity-50'/>
                ))}
            </div>
        </div>
    );
};

export default HappyClient;
