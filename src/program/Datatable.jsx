import React, { useEffect, useState } from 'react'
import { userdata } from '../data';

const Datatable = () => {
    const [data, setData]= useState(userdata);
    const [search, setSearch] = useState("");

   

    const [perPageRecord, setPerPageRecord] = useState(50);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageBtn, setPagebtn] = useState([]);
 
    const handlePaginationBtn =() => {
       let res=[];
       for(let i = 1; i <= Math.ceil(1000 / perPageRecord); i++){
        res.push(i);

       }
       setPagebtn(res);
    };
       
    const handlePaginationRecord =()=>{
    let last =currentPage*perPageRecord;
    let first =last-perPageRecord;
   let result =   userdata.slice(first , last);
   setData(result);
    }

    useEffect(() =>{
      handlePaginationBtn();
      handlePaginationRecord();
    }, [currentPage, perPageRecord]);
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
    <div className='m-4  '><h2 className='text-4xl font-extrabold italic text-center mb-5'>Datatable</h2>
   <div className='flex justify-center mb-5'>
    <div className='bg-white gap-5  p-5 flex shadow-md shadow-black/45 rounded-lg w-[50%] justify-center'>
     <p className='flex '> {" "} <input className=' mr-2 p-0.5 bg-white rounded-sm shadow-sm shadow-black' onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Search'/>
    <button onClick={handleSearch} className='  w-20 rounded-lg text-white font-semibold shadow-sm shadow-black  bg-[#245FE7] hover:bg-blue-700'   >Search</button>
    </p>
    <div className=' '> 
 

<p className=''>
  <select className='shadow-md shadow-black/40 p-1 rounded-lg bg-white ' onChange={(e)=> setPerPageRecord(e.target.value)}>
    <option value="{}">list</option>
     <option value={10} >10</option>
    <option value={50} >50</option>
    <option value={100} >100</option>
    <option value={500}>500</option>
 

  </select>
</p>
</div>
   </div>
   </div>
    



    <table className=" w-full bg-white  shadow-md   ">
        <thead>
                <tr className='border '>
                <th className='border p-2 '>ID</th>
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
              <td className='border p-1'> {item.id}</td>
              <td className='border p-1 '> {item.first_name}</td>
              <td className='border p-1 '> {item.last_name}</td>
              <td className='border p-1 '> {item.email}</td>
              <td className='border p-1 '> {item.gender}</td>
              <td className='border p-1 '> {item.ip_address}</td>
            </tr>
         
          })} 
        </tbody>
    </table>

    <div>
       <p className=' flex-wrap flex align-center justify-center mt-5'>
      {
      pageBtn.map((item, index)=>{

        return <button key={index} onClick={()=> setCurrentPage(item)} className='border-black shadow shadow-black rounded-md bg-white w-10 m-1 text-center  '>{item}
        </button>
      })
    }
</p>
    </div>
    </div>
  )
};


export default Datatable;