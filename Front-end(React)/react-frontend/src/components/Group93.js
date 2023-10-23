import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { BiSolidUser } from "react-icons/bi";
const Group93 = () => {
  const invoiceData = [
    {
      id: "01",
      companyName: "4 S METALLIC ROOFING COMPANY",
      invoiceNo: "000012",
      date: "00/00/2023",
      sendInvoice: "Send",
      lrReceipt: "000021761",
      xxxxxx: "73883",
    },
    {
      id: "01",
      companyName: "4 S METALLIC ROOFING COMPANY",
      invoiceNo: "000012",
      date: "00/00/2023",
      sendInvoice: "Send",
      lrReceipt: "000021761",
      xxxxxx: "73883",
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
      <Container>
        <div
          style={{
            borderRadius: "10px",
            border: "1px solid grey",

            padding: "20px",
            marginTop: "20px",
          }}
        >
          <Row>
            <Col className="text-start">
              <h3>All Invoices</h3>
            </Col>
            <Col className="text-end">
              <Button variant="primary" className="">
                View All
              </Button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <div>
                <Table>
                  <thead>
                    <tr>
                      <th>SI</th>
                      <th>Company Name</th>
                      <th>Invoice No</th>
                      <th>Date</th>
                      <th>Send Invoice</th>
                      <th>LR Receipt</th>
                      <th>XXXXXX</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceData.map((invoice) => (
                      <tr key={invoice.id}>
                        <td>{invoice.id}</td>
                        <td>{invoice.companyName}</td>
                        <td>{invoice.invoiceNo}</td>
                        <td>{invoice.date}</td>
                        <td>
                          {" "}
                          <Button variant="primary" className="rounded-pill">
                            {invoice.sendInvoice}
                          </Button>
                        </td>
                        <td>{invoice.lrReceipt}</td>
                        <td>{invoice.xxxxxx}</td>
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

export default Group93;
