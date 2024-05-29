import React from "react";
import "./css/Link.css";

export default function Link({ href, text }) {    
    function handleClick() {
        let heights = [];

        Array.from(document.querySelectorAll('.section')).every(section => {
            if(section.id === href) {
                return false;
            }
            heights.push(section.getBoundingClientRect().height);
            return true;
        });

        console.log(heights.reduce((acc, height) => acc + height, 0)); // debug

        document.querySelector('.container').scrollTo({
            top: heights.reduce((acc, height) => acc + height, 0),
            behavior: 'smooth'
        });
    }

    return (
        <a onClick={handleClick}>{text}</a>
    );
}