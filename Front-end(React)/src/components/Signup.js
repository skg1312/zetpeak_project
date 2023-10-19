import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import imgsign from "../resources/user_sign_image.png";

function Signup() {
  const history = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function which will validate the input data whenever submit button is clicked.

  function validateForm() {
    // Check if the Email is an Empty string or not.

    if (email.length === 0) {
      alert("Invalid Form, Email Address can not be empty");
      return;
    }

    // check if the password follows constraints or not.

    // if password length is less than 8 characters, alert invalid form.

    if (password.length < 8) {
      alert(
        "Invalid Form, Password must contain greater than or equal to 8 characters."
      );
      return;
    }

    // variable to count upper case characters in the password.
    let countUpperCase = 0;
    // variable to count lowercase characters in the password.
    let countLowerCase = 0;
    // variable to count digit characters in the password.
    let countDigit = 0;
    // variable to count special characters in the password.
    let countSpecialCharacters = 0;

    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "-",
        "+",
        "=",
        "[",
        "{",
        "]",
        "}",
        ":",
        ";",
        "<",
        ">",
      ];

      if (specialChars.includes(password[i])) {
        // this means that the character is special, so increment countSpecialCharacters
        countSpecialCharacters++;
      } else if (!isNaN(password[i] * 1)) {
        // this means that the character is a digit, so increment countDigit
        countDigit++;
      } else {
        if (password[i] === password[i].toUpperCase()) {
          // this means that the character is an upper case character, so increment countUpperCase
          countUpperCase++;
        }
        if (password[i] === password[i].toLowerCase()) {
          // this means that the character is lowercase, so increment countUpperCase
          countLowerCase++;
        }
      }
    }

    if (countLowerCase === 0) {
      // invalid form, 0 lowercase characters
      alert("Invalid Form, 0 lower case characters in password");
      return;
    }

    if (countUpperCase === 0) {
      // invalid form, 0 upper case characters
      alert("Invalid Form, 0 upper case characters in password");
      return;
    }

    if (countDigit === 0) {
      // invalid form, 0 digit characters
      alert("Invalid Form, 0 digit characters in password");
      return;
    }

    if (countSpecialCharacters === 0) {
      // invalid form, 0 special characters characters
      alert("Invalid Form, 0 special characters in password");
      return;
    }

    // if all the conditions are valid, this means that the form is valid

    alert("Form is valid");
  }

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          name,
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if (res.data === "notexist") {
            alert(" you are registered");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-lg-8">
          <div className="box2">
            <div className="fontfamily text-center">BECOME A MEMBER </div>
            <div className="font text-center">
              {" "}
              Join us now and start exploring
            </div>
          </div>
          <div className="box1">
            <h2>
              <b>SIGN UP</b>
            </h2>
            <br></br>

            <form action="POST">
              <div class="mb-3">
                <label for="name" class="form-label text-start">
                  Name
                </label>
                <br></br>
                <input
                  className="rounded "
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter your name"
                  size={30}
                />
              </div>
              <div class="mb-3">
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
              <div class="mb-3">
                <label for="pwd" class="form-label">
                  Password
                </label>
                <br></br>
                <input
                  className="rounded "
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  size={30}
                />
              </div>
              <div class="form-check mb-3">
                <label class="form-check-label "></label>
                <input
                  className="btn btn-danger btnsubmit"
                  type="submit"
                  onClick={submit}
                />
                <br></br>
              </div>
              <pre>
                {" "}
                Do you have already an account?{" "}
                <a href="/"><label className="text-danger ">Login!</label></a>
              </pre>
            </form>
            <img src={imgsign}></img>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Signup;
