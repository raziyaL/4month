import React from 'react';
import Description from "../../component/Description";
import style from './Main.module.css'


function Main() {
    return (
        <div className={style.mainCont}>
            <Description children={{title: "Main title", description:"Main Description", }}/>
        </div>
    );
}

export default Main;