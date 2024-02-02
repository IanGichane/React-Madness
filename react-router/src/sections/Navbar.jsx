import { Routes, Route, Link } from "react-router-dom";
import About from "../components/About";
import Vans from "../components/Vans";
import Home from "./Home";


import Logo from "../components/Logo";

function Navbar() {
    return (
        <>
            <div className="bg-slate-500 p-3 flex justify-between">

                <div>
                    <Link to="/"><Logo /></Link>
                </div>
                <ul className=" flex space-x-4">

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About 
                        </Link>
                    </li>
                    <li>
                        <Link to="/vans">
                            Vans
                        </Link>
                    </li>
                </ul>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
            </Routes>

        </>
    )
}

export default Navbar
