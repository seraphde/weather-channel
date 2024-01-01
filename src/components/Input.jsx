import React from 'react'
import Location from './Location';
import Icons from './icons';


function Input() {
  return (
   
<div className='flex w-full mx-4 justify-center '>
 <div className='flex flex-row w1/4 item-center justify-center'>
    <input type="text" className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize'
      placeholder='search for city'
/> 
      <Location />
      < Icons />
   
 
</div>
<div className='flex flexroww1/4 item-center justify-center'>
<button name='metric' className='text-xl text-white font-light'>
      °C 
      </button>
         <p className='text-xl text-white mx-1'>|</p>
      <button name='imperial' className='text-white font-light text-xl'>
      °F
       </button>


</div>

</div>

            

  );
}

export default Input