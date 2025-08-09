import React, { useState } from 'react'
import { userdata } from '../data';

const Datatable = () => {
    const [data, setData]= useState(userdata);
    const [search, setSearch] = useState("");

    //pagination

    const handleSearch = () => {
      let res = userdata.filter((item) => {
        if (
          item.first_name.toLowerCase().includes(search.toLowerCase()) ||
           item.last_name.toLowerCase().includes(search.toLowerCase()) ||
            item.gender.toLowerCase().includes(search.toLowerCase()) ||
             item.email.toLowerCase().includes(search.toLowerCase()) 
             
         ) {
          return true;
        }
        return false;
      });
      setData(res);
    };
    console.log(data);
  return (
    <div className='m-2'><h2>Datatable</h2>
    <p>Search :{" "} <input className='border mr-2' onChange={(e)=>setSearch(e.target.value)} type='text'/>
    <button onClick={handleSearch} className='border  w-20'   >Search</button>
    </p>
    <table className=" border-collapse border border-gray-400 w-full">
        <thead>
                <tr className='border'>
                <th className='border'>ID</th>
                <th className='border'>First Name</th>
                <th className='border'>Last Name</th>
                <th className='border'>Email</th>
                <th className='border'>Gender</th>
                <th className='border'>Ip Address</th>
            </tr>
        </thead>
        <tbody>
          {data.map((item)=>{
         return   <tr >
              <td className='border'> {item.id}</td>
              <td className='border'> {item.first_name}</td>
              <td className='border'> {item.last_name}</td>
              <td className='border'> {item.email}</td>
              <td className='border'> {item.gender}</td>
              <td className='border'> {item.ip_address}</td>
            </tr>
         
          })} 
        </tbody>
    </table>
    </div>
  )
};


export default Datatable;