import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsFillBookmarkFill, BsLightningChargeFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { MdWindow } from "react-icons/md";
import { AiFillDatabase, AiFillHeart } from "react-icons/ai";

const Super_Admin_Dashboard = () => {
  return (
    <div>
      {" "}
      <div
        style={{
          backgroundImage: `url(https://st.depositphotos.com/45147078/53959/v/450/depositphotos_539596360-stock-illustration-soap-bubbles-flew-randomly-white.jpg)`,
          backgroundSize: "cover",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <Container>
          <Row>
            <Col className="text-end">
              <button className=" btn btn-outline-dark rounded-pill">
                SUPPER_ADMIN &nbsp;
                <BiSolidUser
                  size={34}
                  style={{
                    backgroundColor: "#96b1f4",
                    borderRadius: "50%",
                    padding: "3%",
                  }}
                />
              </button>
            </Col>
          </Row>
          <Row className="mt-5 mb-5">
            <Col>
              <h1 className="text-center">MAIN MENU</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "200px",
                  borderRadius: "10px",
                  border: "2px solid grey",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: "#96b1f4",
                    marginBottom: "20px",
                  }}
                >
                  <MdWindow size={24} />
                </div>
                <h5 className="text-center">GENERATE REPORTS</h5>
              </div>
            </Col>{" "}
            <Col md={3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "200px",
                  borderRadius: "10px",
                  border: "2px solid grey",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: "#96b1f4",
                    marginBottom: "20px",
                  }}
                >
                  <BiSolidUser size={24} />
                </div>
                <h5 className="text-center">MANAGE USERS</h5>
              </div>
            </Col>{" "}
            <Col md={3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "200px",
                  borderRadius: "10px",
                  border: "2px solid grey",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: "#96b1f4",
                    marginBottom: "20px",
                  }}
                >
                  <AiFillDatabase size={24} />
                </div>
                <h5 className="text-center">MANAGE VEHICLES</h5>
              </div>
            </Col>{" "}
          </Row>
          <Row className="justify-content-center mt-5">
            <Col md={3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "200px",
                  borderRadius: "10px",
                  border: "2px solid grey",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: "#96b1f4",
                    marginBottom: "20px",
                  }}
                >
                  <AiFillHeart size={24} />
                </div>
                <h5 className="text-center">MANAGE CLIENTS</h5>
              </div>
            </Col>{" "}
            <Col md={3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "200px",
                  borderRadius: "10px",
                  border: "2px solid grey",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: "#96b1f4",
                    marginBottom: "20px",
                  }}
                >
                  <BsFillBookmarkFill size={24} />
                </div>
                <h5 className="text-center">INVOICE MANAGEMENT</h5>
              </div>
            </Col>{" "}
            <Col md={3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "200px",
                  borderRadius: "10px",
                  border: "2px solid grey",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: "#96b1f4",
                    marginBottom: "20px",
                  }}
                >
                  <BsLightningChargeFill size={24} />
                </div>
                <h5 className="text-center">ALL INVOICE</h5>
              </div>
            </Col>{" "}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Super_Admin_Dashboard;
