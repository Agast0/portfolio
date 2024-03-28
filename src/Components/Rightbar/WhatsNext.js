import React from 'react';
import useCheckMobile from "../../Hooks/useCheckMobile";
import {motion} from "framer-motion";

function WhatsNext() {
    const isMobile = useCheckMobile();

    return (
        <div className={"whats-next-container"}>
            <motion.div initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                 whileInView={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 viewport={{ once: true }}
                className={`whats-next-title ${isMobile ? 'mobile' : ''}`}>What's next?</motion.div>
            <motion.div
                initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                whileInView={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={"whats-next-desc"}>
                <p>
                    I plan to continue working on personal projects that fuel my creativity and passion.
                </p>
                <p>
                    Additionally, I aim to gain valuable experience through professional roles in my journey.
                </p>
                <p>
                    Lastly, I am committed to completing my university education to further enhance my skills and
                    knowledge.
                </p>
            </motion.div>
        </div>
    );
}

export default WhatsNext;