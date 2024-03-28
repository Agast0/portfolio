import {useEffect, useRef} from "react";
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
                    <div className={"app-title"}>{title}</div>
                    <div className={"app-bp"}>•</div>
                    <div className={"app-role"}>{role}</div>
                </div>
                <div className={"app-desc"}>{description}</div>
            </div>
            <div className="app-images">
                <motion.img style={{x: translateXMobile}} src={mobile} alt={`${title} mobile`} className="app-mobile"/>
                <motion.img style={{x: translateXTablet}} src={tablet} alt={`${title} tablet`} className="app-tablet"/>
            </div>
        </div>
    );
}

export default AppPage;
