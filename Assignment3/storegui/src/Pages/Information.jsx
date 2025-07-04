import './Information.css'
import { Link } from "react-router-dom";
import React, {useState} from "react";

export function Location() {
    const storeAddress = "3323 Marietta Pkwy 111, Marietta, GA"
    const weekdayHours = "10am-10pm"
    const weekendHours = "2pm-10pm"
    const storePhone = "(111)-600-6724"
    const [locOn,setLoc] = useState()

    const handleCheckBox = (event) => {
        setLoc(event.target.value)
    }

    return (
        <>
            <div className="topBar">
                <span>
                    <button className={"return"}>
                        <Link to="/">Back</Link>
                    </button>
                </span>
                <h2>Location & Info</h2>
            </div>

            <div className="storeCard">

                <a className={"infoContent"}>
                    <div>M-F</div>
                    <div>{weekdayHours}</div>
                </a>
                <a className={"infoContent"}>
                    <div>S-S</div>
                    <div>{weekendHours}</div>
                </a>
                <a>
                    <div>{storePhone}</div>
                    <div>{storeAddress}</div>
                </a>

                <button className={"order"}>
                    <Link to="/order">Order</Link>
                </button>

            </div>


            <div className="storeCard">

                <a className={"infoContent"}>
                    <div>M-F</div>
                    <div>{weekdayHours}</div>
                </a>
                <a className={"infoContent"}>
                    <div>S-S</div>
                    <div>{weekendHours}</div>
                </a>
                <a>
                    <div>(222)-356-1245</div>
                    <div>003 Forest Hill, Kissimmee, FL</div>
                </a>

                <button className={"order"}>
                    <Link to="/order">Order</Link>
                </button>

            </div>
            <div>
                <input value="first" checked={setLoc === 'first'} type={"checkbox"} onChange={() => setLoc(handleCheckBox)}/>
            </div>
        </>

    )
}