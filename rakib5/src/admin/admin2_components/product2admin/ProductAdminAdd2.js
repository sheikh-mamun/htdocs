import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Admin2_asidebar from "../Admin2_asidebar";
import Admin2_nav from "../Admin2_nav";

export default function ProdcutAdminAdd2() {
    const [photo, setphoto] = useState('')
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const navi = useNavigate()

    const SaveProducts2 = () => {
        const formdata = new FormData()
        formdata.append('photo', photo)
        formdata.append('name', name)
        formdata.append('price', price)

        axios.post("http://localhost/rakib5/Backend/product2/addProduct.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data)
                setphoto('')
                setname('')
                setprice('')
                navi('/admin/products2')
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
                            <h1 className="bg-dark text-white text-center font-weight-bold">Add Products2</h1>

                            <NavLink to={'/admin/products2'} className="btn btn bg-primary">Products2 List</NavLink><br />
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
                                        <th>Price</th>
                                        <td><input type="text" className='form-control' onChange={(e) => setprice(e.target.value)} value={price} /></td>
                                    </tr>

                                    <tr>
                                        <th colSpan={12}>
                                            <button
                                                className="btn btn sm bg-success"
                                                onClick={SaveProducts2}
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
    );
}