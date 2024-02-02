import { Link } from "react-router-dom"
import Logo from "../components/Logo";

function Header() {
    return (
        <div>
            <header>
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
                        <li>
                            <Link to="/host">
                                Host
                            </Link>
                        </li>
                    </ul>
                </div>

            </header>

        </div>
    )
}

export default Header
