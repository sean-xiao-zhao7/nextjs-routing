"use client";
import "./ott.css";

import { useState, useEffect } from "react";

import Image from "next/image";

import heroImage1 from "@/assets/img/ott/hero-image1.png";
import heroImage2 from "@/assets/img/ott/hero-image2.png";
import heroImage3 from "@/assets/img/ott/hero-image3.png";
import heroImage4 from "@/assets/img/ott/hero-image4.png";

export default function OTTHeroClientComponent() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [heroImage1, heroImage2, heroImage3, heroImage4];
    let intervalVar;

    useEffect(() => {
        intervalVar = setInterval(() => {
            setCurrentImage((currentImage) => {
                if (currentImage === images.length - 1) {
                    return 0;
                } else {
                    return currentImage + 1;
                }
            });
        }, 3000);

        return () => {
            clearInterval(intervalVar);
        };
    }, []);

    console.log(currentImage);

    return (
        <div id="ott-hero">
            <div id="ott-hero-inner">
                <h1>The Evolution of Connected Financial Services</h1>
                <p>Put your trust in us. A bright future awaits.</p>
                <a className="ott-button white-button">Learn more</a>
            </div>
            <Image
                src={images[currentImage]}
                alt="hero image 1"
                fill
                placeholder="blur"
            />
        </div>
    );
}
