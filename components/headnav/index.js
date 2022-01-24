//Ini hanya simple layout silhakan di bikin sendiri headnav nya
import Image from 'next/image';
import Logo from '../../public/images/Logo.png';
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
                <div className={styles.divNav}>
                    <a style={{ marginRight: 10, cursor: 'pointer' }}>Home</a>
                    <a style={{ marginRight: 10, cursor: 'pointer' }}>Services</a>
                    <a style={{ marginRight: 10, cursor: 'pointer' }}>Our Project</a>
                    <a style={{ cursor: 'pointer' }}>About Us</a>
                </div>
                <div className={styles.btnContactUs}>Contact Us</div>
            </div>
        </div>
    );
};

export default Headnav;
