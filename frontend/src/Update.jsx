import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const {id} = useParams();
    const navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault()
        axios.put('http://localhost:8081/update/'+id, {name, email})
        .then(res =>{
            console.log(res)
            navigate('/')

        }).catch(err => console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='w-50 bg-white p-3 rounded'>
            <h2>Update Student</h2>
            <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="name"><strong>Name:</strong></label>
                <input type="text" placeholder='Enter Name' className='form-control' onChange={e => setName(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email:</strong></label>
                <input type="email" placeholder='Enter Email' className='form-control' onChange={e => setEmail(e.target.value)}/>
            </div>
            <button className='btn btn-success' type='submit'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update