import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import imglogin from "../resources/user_forgot_image.png";

function Forget_password() {
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-lg-8">
          <div className="box2 box">
            <div className="fontfamily"> GET BACK </div>
            <div className="font text-center text-white">
              
              Regain access through a simple process.
            </div>
          </div>
          <div className="box1 p-5 ">
            <h3 className="m-4 text-center">
              <b>FORGET PASSWORD</b>
            </h3>
            <br></br>

            <form action="POST">
              <div class="mt-1 mb-1 m-5">
                <label for="email" class="form-label text-start">
                  Email
                </label>
                <br></br>
                <input
                  className="rounded "
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter your email"
                  size={30}
                />
              </div>
              <br></br>
              <div class="form-check mb-3">
                <label class="form-check-label m-4"></label>
                <input className="btn btn-danger btnsubmit " type="submit" />
                <br></br>
              </div>{" "}
              <br></br>
              <pre>
                {"               "}
                <a href="/Signup">
                  <label className="text-danger ">Sign Up!</label>
                </a>{"                                  "}
                <a href="/">
                  <label className="text-danger ">Login!</label>
                </a>
              </pre>
            </form>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Forget_password;
