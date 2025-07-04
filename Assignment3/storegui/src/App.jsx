import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home.jsx'
import './App.css'
import {Location} from "./Pages/Information.jsx";
import {Order} from "./Pages/Order.jsx";

function App() {

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/info" element={<Location/>}/>
                <Route path="/order" element={<Order/>}/>
            </Routes>
        </Router>
    )
}

export default App
