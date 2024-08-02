import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Admin2_asidebar from '../Admin2_asidebar'
import Admin2_nav from '../Admin2_nav'

export default function AddDesignAdmin() {
    const [photo1, setphoto1] = useState('')
    const [photo2, setphoto2] = useState('')
    const [photo3, setphoto3] = useState('')
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [btn, setbtn] = useState('')

    const navi = useNavigate()

    const SaveDesign = () => {
        const formdata = new FormData()
        formdata.append('photo1', photo1)
        formdata.append('photo2', photo2)
        formdata.append('photo3', photo3)
        formdata.append('title', title)
        formdata.append('content', content)
        formdata.append('btn', btn)

        axios.post("http://localhost/rakib5/Backend/design/addDesign.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data)
                setphoto1('')
                setphoto2('')
                setphoto3('')
                settitle('')
                setcontent('')
                setbtn('')

                navi('/admin/design')
            })
    }
    return (
        <>
            <Admin2_asidebar />
            <div className="content">
                <Admin2_nav />
                <div className="container card card-body">
                    <div className='card'>
                        <div className='card-body'>
                            <h1 className="bg-dark text-white text-center font-weight-bold">Add Design</h1>

                            <NavLink to={'/admin/design'} className="btn btn bg-primary">Design List</NavLink><br />
                        </div>
                    </div>

                    <div>
                        <table className='table table-bordered'>
                            <tbody>

                                <tr>
                                    <th>Photo1</th>
                                    <td colSpan={4}><input type="file" className='form-control' onChange={(e) => setphoto1(e.target.files[0])} /></td>

                                    <th>Photo2</th>
                                    <td colSpan={4}><input type="file" className='form-control' onChange={(e) => setphoto2(e.target.files[0])} /></td>

                                    <th>Photo3</th>
                                    <td colSpan={4}><input type="file" className='form-control' onChange={(e) => setphoto3(e.target.files[0])} /></td>
                                </tr>
                                <tr>
                                    <th>Title</th>
                                    <td colSpan={3}><input type="text" className='form-control' onChange={(e) => settitle(e.target.value)} value={title} /></td>

                                    <th>Content</th>
                                    <th colSpan={6}><textarea className='form-control' onChange={(e) => setcontent(e.target.value)} value={content}></textarea></th>

                                    <th>Btn</th>
                                    <td colSpan={3}><input type="text" className='form-control' onChange={(e) => setbtn(e.target.value)} value={btn} /></td>
                                </tr>

                                <tr>
                                    <th colSpan={12}>
                                        <button
                                            className="btn btn sm bg-success"
                                            onClick={SaveDesign}
                                        >
                                            Save
                                        </button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
