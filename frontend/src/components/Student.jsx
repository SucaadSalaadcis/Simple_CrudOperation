import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function student() {
  
    const [std, setStd] = useState([]);

    const hangleGet = () => {
        axios.get("http://localhost:3000/getStd").then((response) => {
            setStd(response.data)
        }).catch((err) => console.log(err))
    }
    useEffect(() => {
       hangleGet() 
    },)

    const hangleDelete = (id) => {
        axios.delete(`http://localhost:3000/delStd/${id}`).then(()=> {
            alert("Deleted Successfully..");
            hangleGet();
        }).catch((err) => console.log(err))
    }

  return (
    <div className='mt-[100px]'>
    <Link to={"/crtStd"} className='bg-purple-600 text-white px-5 py-3 rounded  ml-5'>add Student</Link>
    <table className='w-full mt-10'>
         <thead className='bg-gray-200'>
            <tr className='text-1xl'>
           <th className='p-3'>Name</th>
           <th>gender</th>
           <th>update</th>
           <th>Delete</th>
            </tr>
            
         </thead>

         <tbody>
             {
                 std.map((ele) => (
                     <>
                    <tr className='text-center'>
                    <td>{ele.name}</td>
                    <td>{ele.gender}</td>
                    <td className='mb-5'> <Link to={`/updStd/${ele._id}`} className='bg-purple-600 text-white   rounded  ml-5'>Update</Link> </td>
                    <td className='mb-5'> <button onClick={() => hangleDelete(ele._id)} className='bg-lime-600  text-white  rounded  ml-5'>Delete</button> </td>
                    </tr>
                    </>
                ))
             }
         </tbody>
      
    </table>
    </div>
  )
}

export default student