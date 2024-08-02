import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Admin2_asidebar from '../Admin2_asidebar'
import Admin2_nav from '../Admin2_nav'

export default function ChoosesAdminUpdate() {
    const { id } = useParams()
    const [photo1, setphoto1] = useState('')
    const [photo2, setphoto2] = useState('')
    const [photo3, setphoto3] = useState('')
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [btn, setbtn] = useState('')

    const navi = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost/rakib5/Backend/design/getDesign.php?id=${id}`)
            .then((res) => {
                setphoto1(res.data.photo1)
                setphoto2(res.data.photo2)
                setphoto3(res.data.photo3)
                settitle(res.data.title)
                setcontent(res.data.content)
                setbtn(res.data.btn)

            })
    }, [])
    const SaveDesign = () => {
        const formdata = new FormData()
        formdata.append('photo1', photo1)
        formdata.append('photo2', photo2)
        formdata.append('photo3', photo3)
        formdata.append('title', title)
        formdata.append('content', content)
        formdata.append('btn', btn)

        formdata.append('id', id)

        axios.post("http://localhost/rakib5/Backend/design/updateDesign.php", formdata, {
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
                <main>
                    <div className="container card card-body">
                        <div className='card-body'>
                            <h1 className="bg-dark text-white text-center text-bold">Update Design</h1>

                            <NavLink to={'/admin/design'} className="btn btn bg-primary">Design List</NavLink><br />
                        </div>

                        <div>
                            <table className='table table-bordered'>
                                <tbody>

                                    <tr>
                                        <th>Photo1</th>
                                        <td><input type="file" className='form-control' onChange={(e) => setphoto1(e.target.files[0])} /></td>

                                        <th>Photo2</th>
                                        <td><input type="file" className='form-control' onChange={(e) => setphoto2(e.target.files[0])} /></td>

                                        <th>Photo3</th>
                                        <td><input type="file" className='form-control' onChange={(e) => setphoto3(e.target.files[0])} /></td>
                                    </tr>
                                    <tr>
                                        <th>Title</th>
                                        <td><input type="text" className='form-control' onChange={(e) => settitle(e.target.value)} value={title} /></td>

                                        <th>Content</th>
                                        <th colSpan={3}><textarea className='form-control' onChange={(e) => setcontent(e.target.value)} value={content}></textarea></th>

                                        <th>Btn</th>
                                        <td><input type="text" className='form-control' onChange={(e) => setbtn(e.target.value)} value={btn} /></td>
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
                </main>
            </div>
        </>
    )
}
