"use client";
import "./clock.css";

import { useState, useEffect } from "react";

export default function ClockClientComponent() {
    const [time, setTime] = useState([0, 0, 0, 0, 0, 0]);

    const getCurrentTime = () => {
        const dateObj = new Date();
        const hours = dateObj.getHours();
        const mins = dateObj.getMinutes();
        const secs = dateObj.getSeconds();
        setTime([
            Math.floor(hours / 10),
            hours % 10,
            Math.floor(mins / 10),
            mins % 10,
            Math.floor(secs / 10),
            secs % 10,
        ]);
    };

    useEffect(() => {
        setInterval(getCurrentTime, 1000);
    }, []);

    return (
        <>
            <div id="clockContainer">
                <div className="digitContainer">
                    <div
                        className={"clock clock-top " + "number" + time[0]}
                    ></div>
                    <div
                        className={"clock clock-bottom " + "number" + time[0]}
                    ></div>
                </div>
                <div className="digitSeparator"></div>
                <div className="digitContainer">
                    <div
                        className={"clock clock-top " + "number" + time[1]}
                    ></div>
                    <div
                        className={"clock clock-bottom " + "number" + time[1]}
                    ></div>
                </div>
                <div className="digitSeparator">:</div>
                <div className="digitContainer">
                    <div
                        className={"clock clock-top " + "number" + time[2]}
                    ></div>
                    <div
                        className={"clock clock-bottom " + "number" + time[2]}
                    ></div>
                </div>
                <div className="digitSeparator"></div>
                <div className="digitContainer">
                    <div
                        className={"clock clock-top " + "number" + time[3]}
                    ></div>
                    <div
                        className={"clock clock-bottom " + "number" + time[3]}
                    ></div>
                </div>
                <div className="digitSeparator">:</div>
                <div className="digitContainer">
                    <div
                        className={"clock clock-top " + "number" + time[4]}
                    ></div>
                    <div
                        className={"clock clock-bottom " + "number" + time[4]}
                    ></div>
                </div>
                <div className="digitSeparator"></div>
                <div className="digitContainer">
                    <div
                        className={"clock clock-top " + "number" + time[5]}
                    ></div>
                    <div
                        className={"clock clock-bottom " + "number" + time[5]}
                    ></div>
                </div>
            </div>
        </>
    );
}
