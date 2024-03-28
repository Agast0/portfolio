import React from 'react';
import zahaab from '../../Assets/zahaab.png';

function Image() {
    return (
        <div className="hero-image-container">
            <img src={zahaab} alt="Zahaab" className="hero-image" />
        </div>
    );
}

export default Image;