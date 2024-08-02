import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ListSliderAdmin() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/rakib5/Backend/testimonials/listSlider.php")
            .then((res) => setData(res.data))
    }, [])
    const deletNews = (id) => {
        axios.get(`http://localhost/rakib5/Backend/testimonials/deleteSlider.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/rakib5/Backend/testimonials/listSlider.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <>
            <main>
                <div className='container card card-body'>
                <div>
                    <h1 className="bg-dark text-white text-center text-bold">Testimonials List</h1>

                    <NavLink to={'/admin/addslider'} className="btn btn bg-primary">Add New</NavLink><br />
                </div>
                <div>
                    <table className='table table-bordered' >
                        <thead className=' bg-secondary text-white text-center font-weight-bold'>
                            <tr>
                                <th>SL</th>


                                <th>Content</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-light'>
                            {data.map((d, i) => {
                                return (
                                    <tr key={i}>


                                        <td>{i + 1}</td>

                                        <td>{d.content}</td>
                                        <td><img src={`http://localhost/rakib5/Backend/images/${d.photo}`} alt={d.name} height={100} /></td>
                                        <td>{d.name}</td>
                                        <td>{d.designation}</td>
                                        <td className='d-sm-inline-flex'>

                                            <NavLink to={`/admin/updateslider/${d.id}`} className='btn bg-success'>Update</NavLink>


                                            <button className='btn  bg-danger' onClick={() => deletNews(d.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                </div>
            </main>
        </>
    )
}
