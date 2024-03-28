import React from 'react';
import './index.css';
import useCheckMobile from "../../Hooks/useCheckMobile";
import Image from "../HeroImage/Image";
import AboutMe from "./AboutMe";

function Rightbar() {
    const isMobile = useCheckMobile();

    return (
        <div className={`rightbar-main-container ${isMobile ? 'mobile' : ''}`}>
            <AboutMe />
        </div>
    );
}

export default Rightbar;
