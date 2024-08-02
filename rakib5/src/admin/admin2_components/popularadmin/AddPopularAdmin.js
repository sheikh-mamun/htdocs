import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Admin2_asidebar from '../Admin2_asidebar'
import Admin2_nav from '../Admin2_nav'

export default function AddPopularAdmin() {
    const [photo, setphoto] = useState('')
    const [name, setname] = useState('')
    const [content, setcontent] = useState('')
    const [btn, setbtn] = useState('')
    const navi = useNavigate()

    const SavePopular = () => {
        const formdata = new FormData()
        formdata.append('photo', photo)
        formdata.append('name', name)
        formdata.append('content', content)
        formdata.append('btn', btn)

        axios.post("http://localhost/rakib5/Backend/populars/addPopular.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data)
                setphoto('')
                setname('')
                setcontent('')
                setbtn('')
                navi('/admin/popular')
            })
    }
    return (
        <>
            <Admin2_asidebar />
            <div className='content'>
                <Admin2_nav />
                <div className="container card card-body">
                    <div>
                        <h1 className="bg-dark text-white text-center text-bold">Add Populars</h1>

                        <NavLink to={'/admin/popular'} className="btn btn bg-primary">Populars List</NavLink><br />
                    </div>

                    <div>
                        <table className='table table-bordered'>
                            <tbody>
                                <tr>

                                    <th>Photo</th>
                                    <td><input type="file" className='form-control' onChange={(e) => setphoto(e.target.files[0])} /></td>

                                    <th>Name</th>
                                    <td><input type="text" className='form-control' onChange={(e) => setname(e.target.value)} value={name} /></td>
                                </tr>
                                <tr>
                                    <th>Content</th>
                                    <td><input type="textarea" className='form-control' onChange={(e) => setcontent(e.target.value)} value={content} /></td>

                                    <th>Btn</th>
                                    <td><input type="text" className='form-control' onChange={(e) => setbtn(e.target.value)} value={btn} /></td>
                                </tr>

                                <tr>
                                    <th colSpan={12}><button className="btn btn sm bg-success" onClick={SavePopular}>Save</button></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}
