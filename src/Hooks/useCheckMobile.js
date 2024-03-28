import {useEffect, useState} from "react";

const useCheckMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 950);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 950);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return isMobile
}

export default useCheckMobile