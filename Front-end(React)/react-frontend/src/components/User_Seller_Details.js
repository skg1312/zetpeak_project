import React from "react";
import Header from "../pages/Header";
import Sidebar from "../pages/Sidebar";

const User_Seller_Details = () => {
  return (
    <>
      <Header />
      <div className="mt-1">
        <div className="row">
          <div className="col-md-2 d-none d-md-block">
            <Sidebar />
          </div>  
          <div className="col-md-10 col-12" style={{ padding: "2%" }}>
            <div
              style={{
                backgroundColor: "#96b1f4",
                padding: "20px",
                borderRadius: "38px",
              }}
            >
              <h3
                className="text-center"
                style={{ fontSize: "44px", fontWeight: "bold" }}
              >
                Seller's Details
              </h3>
              <form style={{ width: "100%", padding: "3%" }}>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="companyName"
                      className="form-label font-weight-bold"
                    >
                      Company Name
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      id="companyName"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="companyAddress"
                      className="form-label font-weight-bold"
                    >
                      Company Address
                    </label>
                  </div>
                  <div className="col-md-8">
                    <textarea
                      className="form-control rounded-pill"
                      id="companyAddress"
                      style={{ width: "100%", height: "100px" }} // Adjust width and height
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="companyGSTIN"
                      className="form-label font-weight-bold"
                    >
                      Company GSTIN/UIN
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      id="companyGSTIN"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="companyState"
                      className="form-label font-weight-bold"
                    >
                      Company State Name
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      id="companyState"
                    />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-4">
                    <label
                      htmlFor="companyState"
                      className="form-label font-weight-bold"
                    >
                      Company State Code
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      id="companyState"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-9"></div>
                  <div className="col-md-3">
                    <button
                      type="submit"
                      className="btn btn-outline-dark rounded-pill bg-white mb-2 w-100"
                      style={{
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "bold",
                        borderBottom: "3px solid black",
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User_Seller_Details;
