import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function RegisterStd() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const navigate = useNavigate();

    const handlePost = (e) => {
        e.preventDefault()
        const data = {
            name,
            gender
        }
      axios.post("http://localhost:3000/crtStd",data).then(()=> {
        alert("successfully create..")
        navigate("/std")
      }).catch((err) => console.log(err)) 
    }

  return (
    <div>
    <h1 className='font-bold ml-[45%] mt-20'>Register Student</h1>
    <form className='mr-5 text-center pt-20'>
    <input value={name} onChange={(e) => setName(e.target.value)} className='h-[50px] w-[450px] m-3 border-blue-600 border-2 pl-5' type="text" placeholder='Enter Name' />
    <input value={gender} onChange={(e) => setGender(e.target.value)} className='h-[50px] w-[450px] m-3 border-purple-600 border-2 pl-5' type="text" placeholder='Enter Gender' />
    <br/>
    <button onClick={handlePost} className='text-white bg-purple-600 px-10 py-2  rounded-md'>Save</button>
  </form>
</div>
  )
}

export default RegisterStd