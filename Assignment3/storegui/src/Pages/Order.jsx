import './Order.css'
import { Link } from "react-router-dom";
import React, {useState} from "react";
import oxtail from '/src/assets/oxtail.jpg'
import jerkchicken from '/src/assets/jerkchicken.png'

export function Order() {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    return(
        <>

            <div className="topBar">
                <span>
                    <button className={"return"}>
                        <Link to="/">Back</Link>
                    </button>
                </span>
                <h2>Order</h2>
            </div>

            <div className="orderCard">
                <>
                    <h3>Oxtail</h3>
                    <div>
                        <img src={oxtail} className="oxtail" alt="oxtail"/>
                    </div>
                    <div>
                        {count}
                        <button onClick={() => setCount((count) => count + 1)}>
                            +
                        </button>
                        <button onClick={() => setCount((count) => count - 1)}>
                            -
                        </button>
                    </div>

                </>

                <>
                    <h3>Jerk Chicken</h3>
                    <div>
                        <img src={jerkchicken} className="oxtail" alt="jerkchicken"/>
                    </div>
                    <div>
                        {count2}
                        <button onClick={() => setCount2((count) => count + 1)}>
                            +
                        </button>
                        <button onClick={() => setCount2((count) => count - 1)}>
                            -
                        </button>
                    </div>

                </>

            </div>

        </>

    )
}