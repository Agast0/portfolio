import React from 'react';
import zahaab from '../../Assets/zahaab.png';
import './index.css';
import useCheckMobile from "../../Hooks/useCheckMobile";

function Image() {
    const isMobile = useCheckMobile()

    return (
        <div className={`hero-image-container ${isMobile ? 'mobile' : isMobile}`}>
            <img src={zahaab} alt="Zahaab" className="hero-image" />
        </div>
    );
}

export default Image;