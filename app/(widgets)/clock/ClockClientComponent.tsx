"use client";

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
            <div id="clock">{time}</div>
        </>
    );
}
