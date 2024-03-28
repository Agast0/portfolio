import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

function AppPage({ title, role, description, mobile, tablet }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({target: ref, offset: ["start end", "start start"]})
    const translateXMobile = useTransform(scrollYProgress, [0, 1], ["-1370px", "200px"])
    const translateXTablet = useTransform(scrollYProgress, [0, 1], ["-620px", "-100px"])

    return (
        <div className={"app-container"} ref={ref}>
            <div>
                <div className={"app-title-container"}>
                    <motion.div
                        initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                        whileInView={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={"app-title"}
                    >
                        {title}
                    </motion.div>
                    <motion.div
                        initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                        whileInView={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={"app-bp"}
                    >
                        •
                    </motion.div>
                    <motion.div
                        initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                        whileInView={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={"app-role"}
                    >
                        {role}
                    </motion.div>
                </div>
                <motion.div
                    initial={{ skewX: -5, scaleX: 1.2, transformOrigin: 'left', opacity: 0 }}
                    whileInView={{ skewX: 0, scaleX: 1, transformOrigin: 'left', opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={"app-desc"}
                >
                    {description}
                </motion.div>
            </div>
            <div className="app-images">
                <motion.img style={{x: translateXMobile}} src={mobile} alt={`${title} mobile`} className="app-mobile"/>
                <motion.img style={{x: translateXTablet}} src={tablet} alt={`${title} tablet`} className="app-tablet"/>
            </div>
        </div>
    );
}

export default AppPage;
