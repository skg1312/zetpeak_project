import React from "react";
import Header from "../pages/Header";

const User_Profile = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 offset-md-4 ">
            <h2 className="text-center">User Profile</h2>
            <div className="position-relative text-center">
              <img
                src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
                className="rounded-circle img-fluid "
                style={{ width: "120px" }}
              />
              <i
                className="fa-solid fa-pencil position-absolute bottom-0 "
                style={{ cursor: "pointer", fontSize: "24px" }}
              ></i>
            </div>
            <form className="mt-4 ">
              <div className="mb-2">
                <label htmlFor="userName" className="form-label font-weight-bold">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="userName"
                  placeholder="Enter username"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="name" className="form-label font-weight-bold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="name"
                  placeholder="Enter name"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label font-weight-bold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control rounded-pill"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="form-label font-weight-bold">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="phone"
                  placeholder="Enter phone number"
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-dark rounded-pill float-end"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default User_Profile;
