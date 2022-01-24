import Image from 'next/image';
import Banner from '../../public/images/photo-cover.png';
import Zigzag from '../../public/images/zigzag.png';
import Circle from '../../public/images/double-circle.png';
import Triangle from '../../public/images/double-triangle.png';
import AddIcon from '../../public/images/add-icon.png';
import styles from '../../styles/MainBanner.module.css';

const MainBanner = () => {
    return (
        <div className={styles.fullMainCont}>
            <div className={styles.mainCont}>
                <div className={styles.contText}>
                    <div style={{ marginBottom: 24 }}>
                        <h1>Build Your Awesome Platform</h1>
                    </div>
                    <div style={{ marginBottom: 24 }}>
                        <p>
                            Enver studio is a digital studio that offers several services such as UI/UX Design to
                            developers, we will provide the best service for those of you who use our services.
                        </p>
                    </div>
                    <div className={styles.btnOurService}>Our Services</div>
                </div>

                <div className={styles.contSecImage}>
                    <div className={styles.divImage}>
                        <Image src={Banner} alt="Logo" width={655} height={712} layout="responsive" objectFit="cover" />
                    </div>
                </div>
            </div>
            <div className={styles.divImageHiasan1}>
                <Image src={Zigzag} alt="Zigzag" width={55} height={18} layout="responsive" objectFit="cover" />
            </div>
            <div className={styles.divImageHiasan2}>
                <Image src={Circle} alt="Circle" width={10} height={10} layout="responsive" objectFit="contain" />
            </div>
            <div className={styles.divImageHiasan3}>
                <Image src={Triangle} alt="Triangle" width={10} height={10} layout="responsive" objectFit="contain" />
            </div>
            <div className={styles.divImageHiasan4}>
                <Image src={AddIcon} alt="Add" width={10} height={10} layout="responsive" objectFit="contain" />
            </div>
        </div>
    );
};

export default MainBanner;
