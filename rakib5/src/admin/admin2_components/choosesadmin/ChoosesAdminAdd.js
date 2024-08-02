import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Admin2_asidebar from "../Admin2_asidebar";
import Admin2_nav from "../Admin2_nav";

export default function ChoosesAdminAdd() {
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [photo, setphoto] = useState('')
    const navi = useNavigate()

    const SaveChooses = () => {
        const formdata = new FormData()

        formdata.append('title', title)
        formdata.append('content', content)
        formdata.append('photo', photo)
        axios.post("http://localhost/rakib5/Backend/chooses/addChooses.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data)
                settitle('')
                setcontent('')
                setphoto('')
                navi('/admin/chooses')
            })
    }

    return (
        <>
            <Admin2_asidebar />
            <div className="content">
                <Admin2_nav />
                <main>
                    <div className="container card card-body">

                        <div className='card'>
                            <div className='card-body'>
                                <h1 className="bg-dark text-white text-center text-bold">Add Chooses</h1>

                                <NavLink to={'/admin/chooses'} className="btn btn bg-primary">Chooses List</NavLink><br />
                            </div>
                        </div>

                        <div>
                            <table className='table table-bordered'>
                                <tbody>
                                    <tr>

                                        <th>Title</th>
                                        <td><input type="text" className='form-control' onChange={(e) => settitle(e.target.value)} value={title} /></td>

                                        <th>Content</th>
                                        <th colSpan={3}><textarea className='form-control' onChange={(e) => setcontent(e.target.value)} value={content}></textarea></th>
                                    </tr>
                                    <tr>
                                        <th>Photo</th>
                                        <td><input type="file" className='form-control' onChange={(e) => setphoto(e.target.files[0])} /></td>
                                    </tr>

                                    <tr>
                                        <th colSpan={12}><button className="btn btn sm bg-success" onClick={SaveChooses}>Save</button></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}