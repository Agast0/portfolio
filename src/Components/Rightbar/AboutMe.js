import React from 'react';
import { motion } from "framer-motion";

function AboutMe() {
    return (
        <div className={"about-me-container"}>
            <motion.div
                initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                whileInView={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={"about-me-heading"}
            >
                About me
            </motion.div>
            <motion.div
                initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                whileInView={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={"about-me-text"}
            >
                I handle everything from creating user interfaces to building server-side logic and databases.
                I use a variety of modern technologies to create functional and visually appealing websites and
                applications, ensuring that they meet the needs and expectations of users.
            </motion.div>
            <motion.div
                initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                whileInView={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={"technical-heading"}
            >
                Technical
            </motion.div>
            <motion.div
                initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                whileInView={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={"technical-text"}
            >
                Right now you can find me hacking away primarily with NestJS, Node.js, React,
                Flutter, and in general anything JavaScript / TypeScript, HTML and CSS related.
            </motion.div>
            <motion.div
                initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                whileInView={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={"personal-heading"}
            >
                Personal
            </motion.div>
            <motion.div
                initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                whileInView={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={"personal-text"}
            >
                I lived in Dubai when I was young and moved home to Karachi a few years ago. Right now, I'm
                studying computer engineering as an undergraduate student in Turkey. Outside of my professional
                life, I enjoy physical activities, especially martial arts.
            </motion.div>
        </div>
    );
}

export default AboutMe;