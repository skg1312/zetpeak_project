import React from "react";

const Sidebar = () => {
  return (
    <div
      className="position-absolute top-0 bottom-0 d-flex flex-column align-items-center"
      style={{
        backgroundColor: "#96b1f4",
        maxWidth: "250px", // Set a maximum width]\
        width: "100%",
        // flex: "0 0 250px", // Fixed width
        boxShadow: "8px 0 10px rgba(0, 0, 0, 0.2)",
        border: "2px solid #000",
        borderRadius: "0px 30px 30px 0px",
        marginTop: "4.7%",
        // height: "100vh",
      }}
    >
      <div className="d-flex flex-column align-items-center mt-5">
        <button
          className="btn btn-outline-dark rounded-pill bg-white mb-2 w-100"
          style={{
            color: "black",
            fontSize: "18px",
            fontWeight: "bold",
            borderBottom: "3px solid black",
          }}
        >
          COMPANY
        </button>
        <button
          className="btn btn-outline-dark rounded-pill bg-white mb-2 w-100"
          style={{
            color: "black",
            fontSize: "18px",
            fontWeight: "bold",
            borderBottom: "3px solid black",
          }}
        >
          CONSIGNMENT
        </button>
        <button
          className="btn btn-outline-dark rounded-pill bg-white mb-2 w-100"
          style={{
            color: "black",
            fontSize: "18px",
            fontWeight: "bold",
            borderBottom: "3px solid black",
          }}
        >
          SELLER's
        </button>
        <button
          className="btn btn-outline-dark rounded-pill bg-white mb-2 w-100"
          style={{
            color: "black",
            fontSize: "18px",
            fontWeight: "bold",
            borderBottom: "3px solid black",
          }}
        >
          BUYER's
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
