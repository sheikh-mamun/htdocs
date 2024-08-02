import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ListPopularAdmin() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/rakib5/Backend/populars/listPopular.php")
            .then((res) => setData(res.data))
    }, [])
    const deletNews = (id) => {
        axios.get(`http://localhost/rakib5/Backend/populars/deletePopular.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/rakib5/Backend/populars/listPopular.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <>
            <main>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h1 className="bg-dark text-white text-center text-bold">Populars List</h1>

                            <NavLink to={'/admin/addpopular'} className="btn btn bg-primary">Add New</NavLink><br />
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <table className='table table-bordered' >
                                <thead className=' bg-secondary text-white text-center font-weight-bold'>
                                    <tr>
                                        <th>SL</th>
                                        <th>Photo</th>
                                        <th>Name</th>
                                        <th>Content</th>
                                        <th>Btn</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-light text-dark text-center font-weight-bold'>
                                    {data.map((d, i) => {
                                        return (
                                            <tr key={i}>


                                                <td>{i + 1}</td>
                                                <td><img src={`http://localhost:8080/react-js/rakib5/Backend/images/${d.photo}`} alt={d.name} height={100} /></td>
                                                <td>{d.name}</td>
                                                <td>{d.content}</td>
                                                <td>{d.btn}</td>
                                                <td className='d-sm-flex'>

                                                    <NavLink to={`/admin/updatepopular/${d.id}`} className='btn bg-success'>Update</NavLink>


                                                    <button className='btn btn-xs bg-danger' onClick={() => deletNews(d.id)}>Delete</button>
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
        </>
    )
}
