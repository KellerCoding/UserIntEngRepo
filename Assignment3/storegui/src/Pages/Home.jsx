//import {useState} from "react";
import './Home.css';
import { Link } from "react-router-dom"
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";


export function Home() {
    const welcometext="Everyting Irie, so nyam til unuh belly buss"
    /*
      const [count, setCount] = useState(0)      /*
      <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
       */

  return (
    <>

        <div className="card">
            <h1>Caribbean Vibez</h1>
        </div>
        <div className={"space"}>
            <a data-tooltip-id="my-tooltip" data-tooltip-content="Everything will be alright. Just come and eat your fill.">{welcometext}</a>
            <Tooltip id="my-tooltip" />
        </div>
        <div className="buttons">
            <button className={"information"}>
                <Link to="/info">Information</Link>
            </button>
            {" "}

            <button className={"order"}>
                <Link to="/order">Menu</Link>
            </button>



        </div>

    </>
  )

}

