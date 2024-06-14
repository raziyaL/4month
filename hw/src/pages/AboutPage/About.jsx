import Description from "../../component/Description";
import React from 'react';
import style from "./About.module.css";


function About() {
    return (
        <div className={style.container}>
            <Description children={{title: "About title", description:"about Description", }} />

        </div>
    );
}

export default About;