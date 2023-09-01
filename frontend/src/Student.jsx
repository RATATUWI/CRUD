import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Student = () => {
    const [student, setStudent] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8081/').then(res =>{
            setStudent(res.data)
        }).catch(err => console.log(err))
    })

    const handleDelete = async(id) =>{
        try{
            await axios.delete('http://localhost:8081/student/'+id);
            window.location.reload();
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='w-75 bg-white p-3 rounded'>
            <form action="">
                <h2>List of Student</h2>
                <Link to={'/Create'} className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {student.map((data, index) =>(
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>
                                    <Link to={`update/${data.id}`} className='btn btn-primary me-2'>Update</Link>
                                    <button className='btn btn-danger' onClick={e => handleDelete(data.id)}>Delete</button>
                                </td>
                            </tr>
                       ))}
                    </tbody>
                </table>
            </form>
        </div>
    </div>
  )
}

export default Student