import React, { useEffect, useState } from "react"
import axios from "axios";
import Products from "./Products";
import { NavLink } from "react-router-dom";

export default function Product() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost/rakib5/Backend/product2/listProduct.php")
      .then((res) => setData(res.data))
  }, [])
  return (
    <>
      {/* Start Product Section */}
      <div className="product-section">
        <div className="container">
          <div className="row">
            <Products />

            {/* Start Column 2 */}
            {data.map((d, i) => {
              return (
                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={i}>
                  <NavLink to={`details/${d.id}`} className="product-item">
                    <img
                      src={`http://localhost/rakib5/Backend/images/${d.photo}`} alt={d.name}
                      className="img-fluid product-thumbnail"
                    />
                    <h3 className="product-title">{d.name}</h3>
                    <strong className="product-price">{d.price}</strong>
                    <span className="icon-cross">
                      <img src="images/cross.svg" className="img-fluid" />
                    </span>
                  </NavLink>
                </div>
              )
            })}
            {/* End Column 2 */}
            
          </div>
        </div>
      </div>
      {/* End Product Section */}
    </>
  );
}
