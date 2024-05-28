import React from "react";
import Link from "./Link";
import "./css/Header.css";

export default function Header() {    
    return (
        <header>
            <div className="logo">Logo</div>
            <nav className="links">
                <ul>
                    <Link href="#home" text="Home" />
                    <Link href="#about" text="About" />
                    <Link href="#projects" text="Projects" />
                    <Link href="#contact" text="Contact" />
                </ul>
            </nav>
        </header>
    );
}