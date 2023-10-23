import React from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import { BiSolidUser, BiSearch } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
const Group95 = () => {
  const invoiceData = [
    {
      id: "01",
      partticukars: "4 S METALLIC ROOFING COMPANY",
      country: "India",
      state: "Rajasthan",
      registration: "Regular",
      partytype: "000021761",
      gstn: "73883",
    },
    {
      id: "01",
      partticukars: "4 S METALLIC ROOFING COMPANY",
      country: "India",
      state: "Rajasthan",
      registration: "Regular",
      partytype: "000021761",
      gstn: "73883",
    },
    {
      id: "01",
      partticukars: "4 S METALLIC ROOFING COMPANY",
      country: "India",
      state: "Rajasthan",
      registration: "Regular",
      partytype: "000021761",
      gstn: "73883",
    },

    // Add more invoice data objects as needed
  ];
  return (
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
              SUPPER_ADMIN 01 &nbsp;
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
      </Container>
      <Container className="mt-5 text-end ">
        <button className=" btn btn-primary">ADD NEW CLIENT</button>
        &nbsp;&nbsp;
        <button className=" btn btn-primary">VIEW ADD NEW CLIENT</button>
      </Container>
      <Container>
        <div
          style={{
            borderRadius: "10px",
            border: "1px solid grey",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <Row className="d-flex align-items-center justify-content-center">
            <Form className="w-50">
              <Form.Group className="d-flex align-items-center justify-content-center">
                <Form.Control type="text" placeholder="Quick Search" />
                <Button variant="light" className="rounded-circle ms-2">
                  <BiSearch size={24} />
                </Button>
                <Button variant="primary" className="ms-auto">
                  Search
                </Button>
              </Form.Group>
            </Form>
          </Row>
          <Row className="mt-3">
            <Col>
              <div>
                <Table>
                  <thead>
                    <tr>
                      <th>SI</th>
                      <th>Particulars</th>
                      <th>Country</th>
                      <th>State</th>
                      <th>Registration Type</th>
                      <th>Part Type</th>
                      <th>GSTN/UIN</th>
                      <th>EDIT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceData.map((invoice) => (
                      <tr key={invoice.id}>
                        <td>{invoice.id}</td>
                        <td>{invoice.partticukars}</td>
                        <td>{invoice.country}</td>
                        <td>{invoice.state}</td>
                        <td>{invoice.registration}</td>
                        <td>{invoice.partytype}</td>
                        <td>{invoice.gstn}</td>
                        <td>
                          <FaEdit />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Group95;
