import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ListBlogAdmin() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/rakib5/Backend/blogs/listBlog.php")
            .then((res) => setData(res.data))
    }, [])
    const deletNews = (id) => {
        axios.get(`http://localhost/rakib5/Backend/blogs/deleteBlog.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/rakib5/Backend/blogs/listBlog.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <main>
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <h1 className="bg-dark text-white text-center text-bold">Blogs List</h1>

                        <NavLink to={'/admin/addblog'} className="btn btn bg-primary">Add New</NavLink><br />
                    </div>
                </div>

                <div className='card'>
                    <div className='card-body'>
                        <table className='table table-bordered' >
                            <thead className=' bg-secondary text-white text-center font-weight-bold'>
                                <tr>
                                    <th>SL</th>
                                    <th>Photo</th>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-light'>
                                {data.map((d, i) => {
                                    return (
                                        <tr key={i}>


                                            <td>{i + 1}</td>
                                            <td><img src={`http://localhost/rakib5/Backend/images/${d.photo}`} alt={d.title} height={100} /></td>
                                            <td>{d.title}</td>
                                            <td>{d.date}</td>
                                            <td className='d-sm-inline-flex'>

                                                <NavLink to={`/admin/updateblog/${d.id}`} className='btn xm bg-success'>Update</NavLink>


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
        </main>
    )
}
