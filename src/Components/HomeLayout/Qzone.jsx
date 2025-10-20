import React from 'react';
import swimingImage from '../../assets/swimming.png'
import classImge from '../../assets/class.png'
import playgroundImge from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3 '>
            <h2 className='font-bold mb-5'>Qzone</h2>
            <div className='space-y-5'>
                <img src={swimingImage} alt=""  />
                <img src={classImge} alt=""  />
                <img src={playgroundImge} alt="" />


            </div>
            
        </div>
    );
};

export default Qzone;