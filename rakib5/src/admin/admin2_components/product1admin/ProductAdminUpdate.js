import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Admin2_asidebar from '../Admin2_asidebar'
import Admin2_nav from '../Admin2_nav'

export default function ProductAdminUpdate() {
    const { id } = useParams()
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [btn, setbtn] = useState('')


    const navi = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost/rakib5/Backend/product1/getProduct.php?id=${id}`)
            .then((res) => {
                settitle(res.data.title)
                setcontent(res.data.content)
                setbtn(res.data.btn)
            })
    }, [])
    const SaveProduct = () => {
        const formdata = new FormData()

        formdata.append('title', title)
        formdata.append('content', content)
        formdata.append('btn', btn)

        formdata.append('id', id)

        axios.post("http://localhost/rakib5/Backend/product1/updateProduct.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                settitle('')
                setcontent('')
                setbtn('')
                navi('/admin/product')
            })
    }

    return (


        <>
            <Admin2_asidebar />
            <div className="content">
                <Admin2_nav />
                <main>
                    <div className="container card card-body">
                        <div className="card-body">
                            <h1 className=" bg-dark text-white text-center font-weight-bold">Update Products</h1>

                            <NavLink to={'/admin/product'} className="btn bg-primary">Products List</NavLink><br />
                        </div>

                        <div>
                            <table className='table table-bordered'>
                                <tbody>
                                    <tr>
                                        <th>title</th>
                                        <td><input type="text" className='form-control' onChange={(e) => settitle(e.target.value)} value={title} /></td>

                                        <th>Content</th>
                                        <td><input type="textarea" className='form-control' onChange={(e) => setcontent(e.target.value)} value={content} /></td>

                                        <th>Btn</th>
                                        <td><input type="text" className='form-control' onChange={(e) => setbtn(e.target.value)} value={btn} /></td>
                                    </tr>


                                    <tr>
                                        <th colSpan={12}><button className="btn btn sm bg-success" onClick={SaveProduct}>Save</button></th>
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