import { Routes, Route, Link } from "react-router-dom";
import About from "../components/About";
import Vans from "../components/Vans";
import Home from "./Home";
import Layout from "./Layout";



import VanDetail from "../components/VanDetail";
import Dashboard from "../Pages/Dashboard";
import Income from "../Pages/Income";
import Reviews from "../Pages/Reviews";

function Navbar() {
    return (
        <>
        

            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vans" element={<Vans />} />
                    <Route path="/vans/:id" element={<VanDetail />} />
                    <Route path="/host" element={<Dashboard />} />
                    <Route path="/host/income" element={<Income />} />
                    <Route path="/host/Reviews" pelement={<Reviews />} />
      
                </Route>

            </Routes>

        </>
    )
}

export default Navbar
