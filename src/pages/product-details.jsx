import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

export const Details = () => {
  useEffect(() => {
    getItem(urlParams.id);
  }, []);
  const urlParams = useParams();
  const [product, setProduct] = useState(null);
  function getItem(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }
  return (
    <div>
      <h2 className="text-center my-2 border">Product Details</h2>
      {product ? (
        <div className="d-flex justify-content-center">
          <div className="col-md-3 shadow p-3 mb-5 bg-white rounded m-2 text-center">
            {/* <img className="w-25" src={product.image} alt="" /> */}
            <img src={product.image} alt="" className="img-fluid w-25" />
            <h4 style={{ fontSize: "0.8rem" }} className="mt-3">
              {product.title}
            </h4>
            <p className="w-100" style={{ fontSize: "0.6rem" }}>
              {product.description}
            </p>
            <b className="w-100" style={{ fontSize: "0.7rem" }}>
              {product.price}$
            </b>
          </div>
        </div>
      ) : (
        // <h5>...Loading</h5>
        <div className="d-flex justify-content-center mt-5 ">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
};
