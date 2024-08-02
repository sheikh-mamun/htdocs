import React, { useEffect, useState } from 'react'
import Navbar from './includes/Navbar';
import Footer from './includes/Footer';
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ProductDetails() {
    const { id } = useParams();
    const [data, setData] = useState({ name: '', price: '', photo: '', id: '' })
    useEffect(() => {
        axios.get(`http://localhost/rakib5/Backend/DetailsProduct.php?id=${id}`)
            .then((d) => setData(d.data))
    }, [])
    return (
        <>
            <Navbar />
            <main>
                <div className='container mt-5'>
                    <div className="course-img h-30 w-50">
                        <picture>
                            <img
                                src={`http://localhost/rakib5/Backend/images/${data.photo}`}
                                alt="course"
                                title="course"
                                className="img-fluid h-30 w-50"
                            />
                        </picture>
                    </div>
                    <h1>Name: {data.name}</h1>
                    <h2><strong>Price: {data.price}</strong></h2>
                </div>
                
            </main>
            <Footer />
        </>
    )
}