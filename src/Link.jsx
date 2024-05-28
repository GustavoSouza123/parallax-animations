import React from "react";
import "./css/Link.css";

import { useSpring, config } from "@react-spring/web";

export default function Link({ href, text }) {
    const [y, setY] = useSpring(() => ({
        immediate: false,
        config: config.slow,
        y: 0,
        onFrame: props => {
            window.scroll(0, props.y);     
        }
    }));

    function handleClick(e) {
        e.preventDefault();
        setY.start({ y: document.querySelector(href).getBoundingClientRect().top } );
        console.log(document.querySelector(href).getBoundingClientRect().top)
    }

    return (
        <a href="#" onClick={() => handleClick(event)}>{text}</a>
    );
}