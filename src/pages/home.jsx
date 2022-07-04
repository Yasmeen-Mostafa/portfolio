import React from "react";
import "./home.style.css";
export default function Home() {
  return (
    <div className="container mt-5 shadow font-link">
      <section className="row">
        <div className="col-7 my-auto">
          <h4 className="w-75 mx-5">
            Hello I'm Yasmeen Mostafa, I am a Front end Developer From Egypt.I
            am trying to keep in touch with updates of our field, web features
            and modern designs, i do all of my best to maximizing the benefit of
            simplicity and elegance that we commit to in all my projects.
          </h4>
        </div>
        <div className="col-5">
          <img
            src="./assets/personal.jpeg"
            className="w-75 mx-3"
            style={{ borderRadius: "2%" }}
            alt="Cinque Terre"
          ></img>
        </div>
      </section>
      <section className="container mt-5">
        <h2 className="mb-4">Skills</h2>
        <h5>HTML5</h5>
        <p className="text-end m-0 p-0">95%</p>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "95%" }}
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h5 className="mt-3">CSS3</h5>
        <p className="text-end m-0 p-0">90%</p>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h5 className="mt-3">JavaScript</h5>
        <p className="text-end m-0 p-0">85%</p>
        <div className="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style={{ width: "85%" }}
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h5 className="mt-3">React</h5>
        <p className="text-end m-0 p-0">85%</p>
        <div className="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style={{ width: "85%" }}
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h5 className="mt-3">Angular</h5>
        <p className="text-end m-0 p-0">75%</p>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "70%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </section>
    </div>
  );
}
