import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateStd() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");

    const navigate = useNavigate();
    const param = useParams();

    // get single data
    const getSingleData = () => {
        axios.get(`http://localhost:3000/get/${param.id}`).then((response) => {
            setName(response.data[0].name);
            setGender(response.data[0].gender);
        }).catch((err) => console.log(err))
    }
    

    // put 
    const hanglePut = (e) => {
        e.preventDefault()
        const data = {
            name,
            gender
        }
        axios.put(`http://localhost:3000/updStd/${param.id}`,data).then(()=> {
          alert("Updated Successfully..")
          navigate("/std")
        }).catch((err) => console.log(err))
    } 
 useEffect(()=> {
    getSingleData();
 },[])

  return (
    <div>
    <h1 className='font-bold ml-[45%] mt-20'>update Student</h1>
    <form className='mr-5 text-center pt-20'>
    <input value={name} onChange={(e) => setName(e.target.value)} className='h-[50px] w-[450px] m-3 border-blue-600 border-2 pl-5' type="text" placeholder='Enter Name' />
    <input value={gender} onChange={(e) => setGender(e.target.value)} className='h-[50px] w-[450px] m-3 border-purple-600 border-2 pl-5' type="text" placeholder='Enter Gender' />
    <br/>
    <button onClick={hanglePut} className='text-white bg-purple-600 px-10 py-2  rounded-md'>Save</button>
  </form>
</div>
  )
}

export default UpdateStd