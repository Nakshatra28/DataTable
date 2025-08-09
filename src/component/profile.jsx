import React , {useState}from 'react'

const profile = () => {
 
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
       <button className='bg-red-400' onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?'Close Menu':'Open Menu'}</button>
      
 
    {menuOpen &&(
        <div>
        <p>profile</p>  
        <p>About</p>
        <p>Contact</p>

        </div>
    )}
       </div>
  );
};

export default profile;
