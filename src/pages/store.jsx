import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

export default function Store() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }
  console.log(products);
  return (
    <div>
      <h2 className="text-center my-2">Shop</h2>
      {products.length != 0 ? (
        <div className="row d-flex justify-content-center">
          {products.map((e, index) => {
            return (
              <Link
                style={{ textDecoration: "none", color: "black" }}
                key={index}
                className="col-md-3 shadow p-3 mb-5 bg-white rounded m-2 text-center"
                to={`/store/${e.id}`}
              >
                <img src={e.image} alt="" className="img-fluid w-25" />
                <h4 style={{ fontSize: "0.8rem" }} className="mt-3">
                  {e.title}
                </h4>
                <p className="w-100" style={{ fontSize: "0.6rem" }}>
                  {e.description}
                </p>
                <b className="w-100" style={{ fontSize: "0.7rem" }}>
                  {e.price}$
                </b>
              </Link>
            );
          })}
        </div>
      ) : (
        // <h5>...Loading</h5>
        <div className="d-flex justify-content-center my-auto">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
}
