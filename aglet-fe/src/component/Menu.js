import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo/aglet_logo.svg";

const base64MenuIcon =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAV0lEQVRIie3SsQ2AMBADQD9zoOwDg7C4B3GaREJRJES+gMLXfWN/YcDekHRKotZR0nHPjKGAAPbkn4yI0o8tGfZoLLgAMJHHlmGLPNMZz/RnPNMZz/R7FeMv6QUDfUW1AAAAAElFTkSuQmCC";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    document.title = "Aglet FE Brief";
    return (
        <>
            <header className="main-header">
                <nav>
                    <div>
                        <Link to="/home">
                            <img src={Logo} alt="Aglet" className="logo img-fluid" />
                        </Link>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <NavLink isActive={false} to="/home">
                                    home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="mobile-header">
                <div onClick={() => setMenuOpen(true)}>
                    <img src={base64MenuIcon} alt="" />
                </div>
            </div>
            <div className={`mobile-sidebar ${menuOpen ? " active" : ""}`}>
                <div onClick={() => setMenuOpen(false)} className="top-section">
                    <img
                        alt=""
                        src="https://icons8.com/icon/67884/delete"
                    />
                </div>
                <div className="menu">
                    <div>
                        <div>
                            <NavLink to="home">Home</NavLink>
                        </div>
                        <div>
                            <NavLink to="contact">Contact</NavLink>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        position: "relative",
                        top: "-40px",
                    }}
                >
                    All rights reserved - Aglet
                </div>
            </div>
        </>
    );
}
