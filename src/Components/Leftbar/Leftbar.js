import React from 'react';
import './index.css';
import Logo from '../../Assets/Logo.png';
import CV from '../../Assets/Zahaab-Khawaja-CV.pdf'

function Leftbar() {
    const handleEmailSend = () => {
        window.location.href = 'mailto:zahaabz@gmail.com';
    };

    return (
        <div className="leftbar-main-container">
            <div className={"leftbar-top-content"}>
                <img src={Logo} alt="Logo" className="logo-image"/>
                <div className={"leftbar-intro-text"}>
                    Hello, I'm a full stack developer and student
                </div>
                <div className={"leftbar-main-text"}>
                    My name is Zahaab Khawaja. I craft digital experiences using modern technologies.
                </div>
            </div>
            <div className={"leftbar-bottom-content"}>
                <div className={"leftbar-button"} onClick={handleEmailSend}>
                    Get in touch!
                </div>
                <div className={"leftbar-links"}>
                    Find me on{' '}
                    <a href="https://github.com/agast0/" target="_blank" rel="noopener noreferrer" className="link">
                        <strong className="bold">GitHub</strong>
                    </a>{' '}
                    and{' '}
                    <a href="https://www.linkedin.com/in/zahaab-khawaja-699a73225/" target="_blank"
                       rel="noopener noreferrer" className="link">
                        <strong className="bold">LinkedIn</strong>
                    </a>
                </div>
                <div className={"leftbar-resume"}>
                    Download {' '}
                    <a href={CV} download="Zahaab-Khawaja-CV.pdf" className="link">
                        <strong className="bold"> my resume</strong>
                    </a>
                    {' '} (PDF 91kb)
                </div>
            </div>
        </div>
    );
}

export default Leftbar;
