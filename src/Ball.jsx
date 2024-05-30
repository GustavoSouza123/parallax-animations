import React from "react";

export default function Ball({ size = 100, left = '40', opacity = 0.5 }) {
    const style = {
        display: 'block',
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: '#ffffffaa',
        borderRadius: '50%',
        marginLeft: `${left}%`,
        opacity: opacity
    };

    return (
        <div style={style}></div>
    );
}