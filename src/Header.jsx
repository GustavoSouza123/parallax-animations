import React from "react";
import Link from "./Link";
import "./css/Header.css";

export default function Header({ onClick }) {    
    return (
        <header onClick={onClick}>
            <div className="logo">Logo</div>
            <nav className="links">
                <ul>
                    <li><Link href="home" text="Home" /></li>
                    <li><Link href="about" text="About" /></li>
                    <li><Link href="projects" text="Projects" /></li>
                    <li><Link href="contact" text="Contact" /></li>
                </ul>
            </nav>
        </header>
    );
}