import React from 'react';
import './index.css';
import useCheckMobile from "../../Hooks/useCheckMobile";
import AboutMe from "./AboutMe";
import AppPage from "./AppPage";
import ccMobile from '../../Assets/CAMPUS CONNECT MOBILE.png';
import ccTablet from '../../Assets/CAMPUS CONNECT TABLET.png';
import tMobile from '../../Assets/TELEPATI MOBILE.png';
import tTablet from '../../Assets/TELEPATI TABLET.png';
import lMobile from '../../Assets/LEAFLET MOBILE.png';
import lTablet from '../../Assets/LEAFLET TABLET.png';

function Rightbar() {
    const isMobile = useCheckMobile();
    const rightBarRef = React.useRef(null);

    return (
        <div className={`rightbar-main-container ${isMobile ? 'mobile' : ''}`} ref={rightBarRef}>
            <AboutMe />
            <AppPage
                title={'CampusConnect'}
                role={'Frontend Developer'}
                description={'A central hub for secure campus interactions and transactions.'}
                mobile={ccMobile}
                tablet={ccTablet}
            />
            <AppPage
                title={'Telepati'}
                role={'Full Stack Developer'}
                description={'A video conferencing application built with mediasoup using WebRTC protocol.'}
                mobile={tMobile}
                tablet={tTablet}
            />
            <AppPage
                title={'LeafletJs Map'}
                role={'Full Stack Developer'}
                description={'An interactive map that enables users to save and manage GPS coordinates with precision.'}
                mobile={lMobile}
                tablet={lTablet}
            />

        </div>
    );
}

export default Rightbar;
