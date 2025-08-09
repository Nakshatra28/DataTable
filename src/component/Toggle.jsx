
import React, { useState } from 'react';



const Toggle = () => {
const [isVisible, setIsVisible] = useState(true);

    
  return (
    <div>
      <button onClick={()=> setIsVisible(!isVisible) }> {isVisible ? 'Hide Text' : 'Show Text'}</button>



        {isVisible &&  <p> Nakshu!</p>}
    </div>
   
  )
}

export default Toggle;
