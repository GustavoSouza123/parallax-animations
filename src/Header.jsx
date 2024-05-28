import React from "react";
import Link from "./Link";
import "./css/Header.css";

export default function Header() {    
    return (
        <header>
            <div className="logo">Logo</div>
            <nav className="links">
                <ul>
                    <Link index="0" href="#home" text="Home" />
                    <Link index="1" href="#about" text="About" />
                    <Link index="2" href="#projects" text="Projects" />
                    <Link index="3" href="#contact" text="Contact" />
                </ul>
            </nav>
        </header>
    );
}