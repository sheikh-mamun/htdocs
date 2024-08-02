import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Admin2_asidebar from '../Admin2_asidebar'
import Admin2_nav from '../Admin2_nav'

export default function AddBlogAdmin() {
    const [photo, setphoto] = useState('')
    const [title, settitle] = useState('')
    const [date, setdate] = useState('')
    const navi = useNavigate()

    const SaveBlog = () => {
        const formdata = new FormData()
        formdata.append('photo', photo)
        formdata.append('title', title)
        formdata.append('date', date)

        axios.post("http://localhost/rakib5/Backend/blogs/addBlog.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data)
                setphoto('')
                settitle('')
                setdate('')
                navi('/admin/blog')
            })
    }
    return (
        <>
            <Admin2_asidebar />
            <div className='content'>
                <Admin2_nav />
                <main>
                    <div className="container card card-body">
                        <div>
                            <h1 className="bg-dark text-white text-center text-bold">Add Blogs</h1>

                            <NavLink to={'/admin/blog'} className="btn btn bg-primary">Blogs List</NavLink><br />
                        </div>

                        <div>
                            <table className='table table-bordered'>
                                <tbody>
                                    <tr>

                                        <th>Photo</th>
                                        <td><input type="file" className='form-control' onChange={(e) => setphoto(e.target.files[0])} /></td>

                                        <th>title</th>
                                        <td><input type="text" className='form-control' onChange={(e) => settitle(e.target.value)} value={title} /></td>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <td><input type="text" className='form-control' onChange={(e) => setdate(e.target.value)} value={date} /></td>
                                    </tr>

                                    <tr>
                                        <th colSpan={12}><button className="btn btn sm bg-success" onClick={SaveBlog}>Save</button></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
