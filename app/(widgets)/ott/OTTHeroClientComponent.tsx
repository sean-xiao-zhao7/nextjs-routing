"use client";
import "./ott.css";

import { useState, useEffect } from "react";

import Image from "next/image";

import heroImage1 from "@/assets/img/ott/hero-image1.png";
import heroImage2 from "@/assets/img/ott/hero-image2.png";
import heroImage3 from "@/assets/img/ott/hero-image3.png";
import heroImage4 from "@/assets/img/ott/hero-image4.png";

export default function OTTHeroClientComponent() {
    return (
        <div id="ott-hero">
            <div id="ott-hero-inner">
                <h1>The Evolution of Connected Financial Services</h1>
                <p>Put your trust in us. A bright future awaits.</p>
                <a className="ott-button white-button">Learn more</a>
            </div>
            <Image src={heroImage1} alt="hero image 1" fill />
        </div>
    );
}
