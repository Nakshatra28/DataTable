import React, { useState } from 'react'

 const counter = () => {
 const  [counter, setCounter] = useState(0);


 return(
    <div>
      <h1>Count: {counter}</h1>
      <button className='bg-green-200 border-green-800 mr-5' onClick={()=> setCounter(counter+1)}>Increase</button>
      <button className='bg-yellow-200 border-yellow-800 mr-5' onClick={()=> setCounter(counter -1)}>Decrease</button>
      <button className='bg-red-200 border-red-800 mr-5' onClick={()=> setCounter(0)}>reset</button>

    </div>
 )
}

export default counter;
