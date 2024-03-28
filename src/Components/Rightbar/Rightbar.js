import React from 'react';
import './index.css';
import useCheckMobile from "../../Hooks/useCheckMobile";
import Image from "./Image";

function Rightbar() {
    const isMobile = useCheckMobile();

    return (
        <div className={`rightbar-main-container ${isMobile ? 'mobile' : ''}`}>
            <Image />
        </div>
    );
}

export default Rightbar;