import React from "react";
import '../components/Single.css';

export default function Single_page() {
    return (
        <>
            <div className="tab">
                <ul className="nav">
                    <li className="first">
                        <a className="nav-link" href="#">LOAD REPORT</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">DATE WISE REPORT</a>
                    </li>
                    <li><a className="nav-link" href="#">ITEM WISE REPORT</a></li>
                    <li><a className="nav-link" href="#">VEHICLE WISE REPORT</a></li>
                    <li><a className="nav-link" href="#">DRIVER WISE REPORT</a></li>
                </ul>
            </div>
            <div>
                <div className="load_report">
                    <input type="date" className="date-picker" />
                </div>
                <div className="Second">
                    <div className="form">
                        <form>
                            <input type="text" placeholder="SEARCH LR WITH NUMBER" className="search_lr_no" />
                            <input type="date" placeholder="SEARCH BY DATE" className="search_date" />
                            <button className="btn">SEARCH</button>
                            <button className="btn">EXPORT</button>
                        </form>
                    </div>
                    <div className="table">
                        <table>
                            <tr className="head">
                                <td>Report Id</td>
                                <td>Total Cost</td>
                                <td>Date</td>
                                <td>Transportation Cost</td>
                                <td>Vehicle Number</td>
                            </tr>
                            <tbody>
                                <tr>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
