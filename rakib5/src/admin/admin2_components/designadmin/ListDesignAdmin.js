import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ListDesignAdmin() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/rakib5/Backend/design/listDesign.php")
            .then((res) => setData(res.data))
    }, [])
    const deletNews = (id) => {
        axios.get(`http://localhost/rakib5/Backend/design/deleteDesign.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/rakib5/Backend/design/listDesign.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <>
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <h1 className="bg-dark text-white text-center font-weight-bold">Design List</h1>

                        <NavLink to={'/admin/adddesign'} className="btn btn bg-primary">Add New</NavLink><br />
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <table className='table table-bordered' >
                            <thead className=' bg-secondary text-white text-center font-weight-bold'>
                                <tr>
                                    <th>SL</th>
                                    <th>photo1</th>
                                    <th>Photo2</th>
                                    <th>Photo3</th>
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
                                            <td><img src={`http://localhost/rakib5/Backend//images/${d.photo1}`} alt={d.title} height={100} /></td>
                                            <td><img src={`http://localhost/rakib5/Backend//images/${d.photo2}`} alt={d.title} height={100} /></td>
                                            <td><img src={`http://localhost/rakib5/Backend//images/${d.photo3}`} alt={d.title} height={100} /></td>
                                            <td>{d.title}</td>
                                            <td>{d.content}</td>
                                            <td>{d.btn}</td>


                                            <td className='d-sm-flex'>

                                                <NavLink to={`/admin/updatedesign/${d.id}`} className='btn bg-success'>Update</NavLink>


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

        </>
    )
}
