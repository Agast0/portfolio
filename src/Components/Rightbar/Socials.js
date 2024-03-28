import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import useCheckMobile from "../../Hooks/useCheckMobile";
import { motion } from "framer-motion";

function Socials() {
    const isMobile = useCheckMobile();

    const handleLinkedInClick = () => {
        // Handle LinkedIn icon click
        window.open('https://www.linkedin.com/in/zahaab-khawaja-699a73225/', '_blank'); // Opens LinkedIn in a new tab
    };

    const handleGitHubClick = () => {
        // Handle GitHub icon click
        window.open('https://github.com/agast0/', '_blank'); // Opens GitHub in a new tab
    };

    const handleMailClick = () => {
        // Handle Mail icon click
        window.open('mailto:zahaabz@gmail.com'); // Opens default mail client
    };

    return (
        <div className={`socials-container ${isMobile ? 'mobile' : ''}`}>
            <motion.div
                initial={{opacity: 0, y: 20}} // Initial animation state
                whileInView={{opacity: 1, y: 0}} // Animation when component mounts
                transition={{duration: 0.5}} // Animation duration
            >
                <FaLinkedin className={`social-icon ${isMobile ? 'mobile' : ''}`} onClick={handleLinkedInClick}/>
                <FaGithub className={`social-icon ${isMobile ? 'mobile' : ''}`} onClick={handleGitHubClick}/>
                <IoMail className={`social-icon ${isMobile ? 'mobile' : ''}`} onClick={handleMailClick} style={{marginRight: '0'}}/>
            </motion.div>
        </div>
    );
}

export default Socials;
