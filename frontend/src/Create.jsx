import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault()
        axios.post('http://localhost:8081/create', {name, email})
        .then(res =>{
            console.log(res)
            navigate('/')
        }).catch(err => console.log(err))
    }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='w-50 bg-white p-3 rounded'>
            <h2>Add Student</h2>
            <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="name"><strong>Name:</strong></label>
                <input type="text" placeholder='Enter Name' className='form-control' onChange={e => setName(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email:</strong></label>
                <input type="email" placeholder='Enter Email' className='form-control' onChange={e => setEmail(e.target.value)}/>
            </div>
            <button className='btn btn-success' type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create