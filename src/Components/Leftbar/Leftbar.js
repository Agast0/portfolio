import React from 'react';
import './index.css';
import Logo from '../../Assets/Logo.png';
import CV from '../../Assets/Zahaab-Khawaja-CV.pdf';
import useCheckMobile from "../../Hooks/useCheckMobile";
import { motion } from "framer-motion";

function Leftbar() {
    const isMobile = useCheckMobile();

    const handleEmailSend = () => {
        window.location.href = 'mailto:zahaabz@gmail.com';
    };

    const LeftbarContent = () => (
        <>
            <div className={"leftbar-top-content"}>
                <motion.img
                    initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                    animate={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    src={Logo} alt="Logo" className="logo-image"
                />
                <motion.div
                    initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                    animate={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={`leftbar-intro-text ${isMobile ? 'mobile' : ''}`}
                >
                    Hello, I'm a full stack developer and student
                </motion.div>
                <motion.div
                    initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                    animate={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className={`leftbar-main-text ${isMobile ? 'mobile' : ''}`}
                >
                    My name is Zahaab Khawaja. I craft digital experiences using modern technologies.
                </motion.div>
            </div>
            <motion.div
                initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                animate={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className={`leftbar-bottom-content ${isMobile ? 'mobile' : ''}`}
            >
                <motion.div
                    initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                    animate={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className={`leftbar-button ${isMobile ? 'mobile' : ''}`}
                    onClick={handleEmailSend}
                >
                    Get in touch!
                </motion.div>
                <motion.div
                    initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                    animate={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className={`leftbar-links ${isMobile ? 'mobile' : ''}`}
                >
                    Find me on{' '}
                    <a href="https://github.com/agast0/" target="_blank" rel="noopener noreferrer" className="link">
                        <strong className="bold">GitHub</strong>
                    </a>{' '}
                    and{' '}
                    <a href="https://www.linkedin.com/in/zahaab-khawaja-699a73225/" target="_blank"
                       rel="noopener noreferrer" className="link">
                        <strong className="bold">LinkedIn</strong>
                    </a>
                </motion.div>
                <motion.div
                    initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                    animate={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className={`leftbar-resume ${isMobile ? 'mobile' : ''}`}
                >
                    Download {' '}
                    <a href={CV} download="Zahaab-Khawaja-CV.pdf" className="link">
                        <strong className="bold"> my resume</strong>
                    </a>
                    {' '} (PDF 91kb)
                </motion.div>
            </motion.div>
        </>
    );

    return (
        <>
            {isMobile ? (
                <div className={`leftbar-main-container ${isMobile ? 'mobile' : ''}`}>
                    <LeftbarContent />
                </div>
            ) : (
                <motion.div
                    initial={{ width: 'calc(100% - 120px)' }}
                    animate={{ width: 'calc(38% - 120px)' }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className={`leftbar-main-container ${isMobile ? 'mobile' : ''}`}
                >
                    <LeftbarContent />
                </motion.div>
            )}
        </>
    );
}

export default Leftbar;
