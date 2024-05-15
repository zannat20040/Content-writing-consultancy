import { Button } from '@material-tailwind/react';
import React from 'react';

const CTA = () => {
    return (
        <div className='  container mt-36 mx-auto'>
           <div className='p-10 rounded-2xl bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white flex gap-5 justify-between'>
           <p className='text-4xl  font-semibold w-2/4'>It will help you improve your writing & bring ideas more clearly.</p>
            <Button
                variant="text"
                className="hidden col-span-1 lg:inline-block  capitalize font-inter py-3 px-7 text-sm rounded-md font-normal bg-white"
              >
                <span>Start 14 Days Free Trial</span>
              </Button>
           </div>
        </div>
    );
};

export default CTA;