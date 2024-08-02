import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


export default function ProductAdminList() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/rakib5/Backend/product1/listProduct.php")
            .then((res) => setData(res.data))
    }, [])
    const deletNews = (id) => {
        axios.get(`http://localhost/rakib5/Backend/product1/deleteProduct.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/rakib5/Backend/product1/listProduct.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <main>
            <div className='card card-body'>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h1 className="bg-dark text-white text-center text-bold">Product List</h1>

                            <NavLink to={'/admin/addproduct'} className="btn btn bg-primary">Add New</NavLink><br />
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
                                        <th>Btn</th>
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
                                                <td>{d.btn}</td>
                                                <td className='d-sm-flex'>

                                                    <NavLink to={`/admin/updateproduct/${d.id}`} className='btn xm bg-success'>Update</NavLink>


                                                    <button className='btn xm bg-danger' onClick={() => deletNews(d.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}