import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


export default function ChoosesAdminList() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/rakib5/Backend/chooses/listChooses.php")
            .then((res) => setData(res.data))
    }, [])
    const deletNews = (id) => {
        axios.get(`http://localhost/rakib5/Backend/chooses/deleteChooses.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/rakib5/Backend/chooses/listChooses.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <main>
            <div className='container card card-body'>
                <div className='card'>
                    <div className='card-body'>
                        <h1 className=" bg-dark text-white text-center font-weight-bold">Chooses List</h1>

                        <NavLink to={'/admin/addchooses'} className="btn btn bg-primary">Add New</NavLink><br />
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <table className='table table-bordered' >
                            <thead className=' bg-secondary text-white text-center font-weight-bold'>
                                <tr>
                                    <th>SL</th>

                                    <th>Title</th>
                                    <th>Content</th>
                                    <th>Photo</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-light text-dark text-center font-weight-bold'>
                                {data.map((d, i) => {
                                    return (
                                        <tr key={i}>


                                            <td>{i + 1}</td>
                                            <td>{d.title}</td>
                                            <td>{d.content}</td>
                                            <td><img src={`http://localhost/rakib5/Backend/images/${d.photo}`} alt={d.title} height={100} /></td>

                                            <td className='d-sm-flex '>

                                                <NavLink to={`/admin/updatechooses/${d.id}`} className='btn bg-success'>Update</NavLink>


                                                <button className='btn  bg-danger' onClick={() => deletNews(d.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>

    )
}