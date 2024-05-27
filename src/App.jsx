import React from "react";
import Ball from "./Ball";
import "./index.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function App() {
    return (
        <Parallax pages={4}>

            <ParallaxLayer
                className="parallax"
                offset={0}
                speed={0.7}
                style={{
                    backgroundColor: '#000',
                }}
            >
                <h2>Hello world</h2>
            </ParallaxLayer>

            <ParallaxLayer
                className="parallax"
                offset={0.1}
                speed={1.3}
                factor={1}
                style={{
                    paddingTop: '30px'
                }}
            >
                <h2>My name is Gustavo Souza</h2>
            </ParallaxLayer>

            <ParallaxLayer
                className="parallax"
                offset={1}
                speed={1}
                style={{
                    backgroundColor: '#222',
                }}
            >
                <h2>My first React Spring app</h2>
            </ParallaxLayer>

            <ParallaxLayer offset={1.2} speed={0.2}><Ball size={100} left="20" /></ParallaxLayer>
            <ParallaxLayer offset={1.8} speed={1.5}><Ball size={70} left="70" /></ParallaxLayer>
            <ParallaxLayer offset={1.1} speed={1.3}><Ball size={30} left="55" /></ParallaxLayer>
            <ParallaxLayer offset={1.4} speed={2.5}><Ball size={130} left="30" /></ParallaxLayer>
            <ParallaxLayer offset={1.6} speed={1.8}><Ball size={110} left="10" /></ParallaxLayer>
            <ParallaxLayer offset={1.1} speed={0.5}><Ball size={50} left="80" /></ParallaxLayer>
            <ParallaxLayer offset={1.75} speed={0.1}><Ball size={50} left="30" /></ParallaxLayer>
            <ParallaxLayer offset={1.4} speed={2}><Ball size={50} left="50" /></ParallaxLayer>

            <ParallaxLayer
                className="parallax"
                offset={2}
                speed={1}
                style={{
                    backgroundColor: '#000',
                }}
            >
                <h2>Another section of my website</h2>
            </ParallaxLayer>

            <ParallaxLayer
                className="parallax"
                offset={3}
                speed={1}
                style={{
                    backgroundColor: '#222',
                }}
            >
                <h2>Last section</h2>
            </ParallaxLayer>

        </Parallax>
    );
}