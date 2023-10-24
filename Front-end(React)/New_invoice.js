import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import user from "./resources/user.png";
import "./invoice.css";

function New_invoice() {

  return (
    <div className="">
      <div className="right">
        <button className="btn rounded-pill border">
          SUPER USER 01<img className="user" src={user}></img>
        </button>
      </div>
      <h1 className="text-center">
        <b>NEW INVOICE</b>
      </h1>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-lg-6 p-5 card border-primary">
          <form action="#" method="post">
            <div className="row">
              <div className="col-6">
                <h3>
                  Invoice Details
                </h3><br></br>
                <div>
                  <label for="customer_name" class="form-label">
                   Customer Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="customer_name"
                    placeholder="100128732"
                    name="email"
                  />
                   <label for="e_way_no" class="form-label">
                   e-way No.
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="e_way_no" 
                    name="e_way_no"
                  />
                   <label for="Dated" class="form-label">
                   Dated
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="Dated"
                    name="Dated"
                  />
                   <label for="delivery_note" class="form-label">
                   Delivery Note
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="delivery_note"
                    name="delivery_note"
                  />
                   <label for="payment" class="form-label">
                   Mode/Terms of Payment
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="payment"
                    name="payment"
                  />
                   <label for="supplier_ref" class="form-label">
                   Suppliers Ref.
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="supplier_ref"
                    name="supplier_ref"
                  />
                   <label for="other_ref" class="form-label">
                   Other Reference(s)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="other_ref"
                    name="other_ref"
                  />
                  <br></br>
                  <h3 className="mt-5">
                  Boarding Details
                </h3>
                <label for="Rate" class="form-label">
                Rate
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="Rate"
                    name="Rate"
                  />
                   <label for="Weight" class="form-label">
                   Weight
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="Weight"
                    name="Weight"
                  />
                   <label for="transport_cost" class="form-label">
                   Transportation Cost
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="transport_cost"
                    name="transport_cost"
                  />
                   <label for="boarding_date" class="form-label">
                   Date
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="boarding_date"
                    name="boarding_date"
                  />
                  <h3 className="mt-5">
                  Boarding Details
                </h3>
                <label for="water_mark" class="form-label">
                Water Mark Content
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="water_mark"
                    name="water_mark"
                  />
                </div>
              </div>
              <div className="col-6">
               
                <br></br><br></br>
                <div className="mt-3">
                  <label for="buyer_no" class="form-label">
                  Buyer's Order No.
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="buyer_no"
                    name="buyer_no"
                  />
                   <label for="Dated1" class="form-label">
                   Dated
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="Dated1" 
                    name="Dated1"
                  />
                   <label for="delivery_date" class="form-label">
                   Delivery Note Date
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="delivery_date"
                    name="delivery_date"
                  />
                   <label for="dispatched" class="form-label">
                   Dispatched through
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="dispatched"
                    name="dispatched"
                  />
                   <label for="Destination" class="form-label">
                   Destination
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="Destination"
                    name="Destination"
                  />
                   <label for="bill_no" class="form-label">
                   Bill of Landing/LR-RR No.
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="bill_no"
                    name="bill_no"
                  />
                   <label for="vehicle_no" class="form-label">
                   Motor Vehicle Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="vehicle_no"
                    name="vehicle_no"
                  />
                   <label for="term_dilivary" class="form-label">
                   Terms of Delivery
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="term_dilivary"
                    name="term_dilivary"
                  />
                  <br></br>
                <div className="mt-3">
                  <label for="driver_name" class="form-label">
                  Driver Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="driver_name"
                    name="driver_name"
                  />
                   <label for="driver_no" class="form-label">
                   Driver Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="driver_no" 
                    name="driver_no"
                  />
                   <label for="driver_address" class="form-label">
                   Driver Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="driver_address"
                    name="driver_address"
                  />
                   <label for="time" class="form-label">
                   Time
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="time"
                    name="time"
                  />
                  <br></br><br></br><br></br>
                <button src={"#"} className="m-5  btn btn-primary">Create the Invoice</button>
                </div>
              </div>
              </div>
              </div>
          </form>

          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}

export default New_invoice;
