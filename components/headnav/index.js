//Ini hanya simple layout silhakan di bikin sendiri headnav nya
import Image from 'next/image';
import React, { useState } from 'react';
import ReactResponsiveHook from '../../utils/ReactResponsiveHook';

import Logo from '../../public/images/Logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../../styles/Headnav.module.css';

// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//     fullMainCont: {
//         width: '100%',
//         height: 80,
//         backgroundColor: 'orange'
//     }
// }));

const Headnav = () => {
    // const classes = useStyles();
    const [pages, setPages] = useState('Home');
    const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();

    const handleClickHome = () => {
        setPages('Home');
    };
    const handleClickService = () => {
        setPages('Services');
    };
    const handleClickOurProject = () => {
        setPages('OurProject');
    };
    const handleClickAboutus = () => {
        setPages('Aboutus');
    };

    let desktopVersion = (
        <>
            <div className={styles.divNav}>
                {pages === 'Home' ? (
                    <a style={{ marginRight: 10, color: '#5454D4', cursor: 'pointer' }} onClick={handleClickHome}>
                        Home
                    </a>
                ) : (
                    <a style={{ marginRight: 10, cursor: 'pointer' }} onClick={handleClickHome}>
                        Home
                    </a>
                )}

                {pages === 'Services' ? (
                    <a style={{ marginRight: 10, color: '#5454D4', cursor: 'pointer' }} onClick={handleClickService}>
                        Services
                    </a>
                ) : (
                    <a style={{ marginRight: 10, cursor: 'pointer' }} onClick={handleClickService}>
                        Services
                    </a>
                )}

                {pages === 'OurProject' ? (
                    <a style={{ marginRight: 10, color: '#5454D4', cursor: 'pointer' }} onClick={handleClickOurProject}>
                        Our Project
                    </a>
                ) : (
                    <a style={{ marginRight: 10, cursor: 'pointer' }} onClick={handleClickOurProject}>
                        Our Project
                    </a>
                )}
                {pages === 'Aboutus' ? (
                    <a style={{ cursor: 'pointer', color: '#5454D4' }} onClick={handleClickAboutus}>
                        About Us
                    </a>
                ) : (
                    <a style={{ cursor: 'pointer' }} onClick={handleClickAboutus}>
                        About Us
                    </a>
                )}
            </div>
            <div className={styles.btnContactUs}>Contact Us</div>
        </>
    );

    let mobileVersion = (
        <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
            <MenuIcon />
        </div>
    );

    return (
        <div className={styles.fullMainCont}>
            <div className={styles.mainCont}>
                <div className={styles.divLogo}>
                    <div style={{ marginRight: 10 }}>
                        <Image src={Logo} alt="Logo" width={40} height={40} />
                    </div>
                    <div>
                        <p className={styles.enverText}>Enver</p>
                    </div>
                </div>

                {isMobile ? (isTablet ? (isDesktop ? desktopVersion : desktopVersion) : desktopVersion) : mobileVersion}
            </div>
        </div>
    );
};

export default Headnav;
