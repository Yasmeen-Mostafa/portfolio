import React, { useState } from "react";
import Decrement from "../../components/decrement";
import Increment from "../../components/increment";
import CounterTitle from "../../components/Counter.component";
import { Toast, ToastContainer } from "react-bootstrap";
import { setCounter } from "../../Redux/features/counterRedux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./count.style.css";
export default function Counter() {
  const [showToaster, setShowToaster] = useState(false);
  const [donated, setDonated] = useState(false);
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const cardClicked = (e, num) => {
    dispatch(setCounter(num));
    setDonated(true);
    setShowToaster(!showToaster);
    var target = e.target;
    if (target.class === "card") {
      target.style.borderColor = "#EF5261";
    } else {
      switch (target.nodeName) {
        case "P":
        case "svg":
          document.getElementsByClassName("card")[
            Number(target.parentElement.parentElement.id)
          ].style.borderColor = "#EF5261";
          break;
        case "path":
          document.getElementsByClassName("card")[
            Number(target.parentElement.parentElement.parentElement.id)
          ].style.borderColor = "#EF5261";
          break;
        default:
          document.getElementsByClassName("card")[
            Number(target.id)
          ].style.borderColor = "#EF5261";
          break;
      }
    }
  };
  return (
    <section className=" position-relative donate pt-2">
      <h1 className="text-center mb-4">Support us</h1>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <figure className="w-75 mx-auto">
              <img src="./assets/donation.png" className="img-fluid" alt="" />
            </figure>
          </div>
          <div className="col-6 my-auto">
            <h2 className="text-center">
              Please support our work so we can do better 🤍
            </h2>
            <h5 className="mt-4">Select amount</h5>
            <p className="title m-auto">
              Make sure to check one targeted amount
            </p>

            <div
              className="row"
              style={donated ? { pointerEvents: "none", opacity: "1" } : {}}
            >
              <div
                className="col-md-3 card text-dark m-2 border-3 shadow"
                id="0"
                onClick={(e) => {
                  cardClicked(e, 10);
                }}
              >
                <div className=" fs-1 text-center donation-icon">
                  <FontAwesomeIcon icon={faHandHoldingDollar} />
                </div>
                <hr />
                <div className="card-body">
                  <p className="text-center h4">10$</p>
                </div>
              </div>

              <div
                className="col-md-3 card text-dark m-2 border-3 shadow"
                id="1"
                onClick={(e) => {
                  cardClicked(e, 50);
                }}
              >
                <div className=" fs-1 text-center donation-icon">
                  <FontAwesomeIcon icon={faHandHoldingDollar} />
                </div>
                <hr />
                <div className="card-body">
                  <p className="text-center h4">50$</p>
                </div>
              </div>

              <div
                className="col-md-3 card text-dark m-2  border-3 shadow"
                id="2"
                onClick={(e) => {
                  cardClicked(e, 100);
                }}
              >
                <div className=" fs-1 text-center donation-icon">
                  <FontAwesomeIcon icon={faHandHoldingDollar} />
                </div>
                <hr />
                <div className="card-body">
                  <p className="text-center h4">100$</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className="p-3" position="top-end">
        <Toast
          bg="success"
          show={showToaster}
          onClose={() => {
            setShowToaster(!showToaster);
          }}
        >
          <Toast.Header closeButton={true}>
            <strong>Thanks 🧡</strong>
          </Toast.Header>

          <Toast.Body className="text-white">
            Thank you for donating {counter}$
          </Toast.Body>
        </Toast>
      </ToastContainer>
      {/* <div className="">
        <CounterTitle />
        <div className="">
          <Decrement />
          <Increment />
        </div>
      </div> */}
    </section>
  );
}
