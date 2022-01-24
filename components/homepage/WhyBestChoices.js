import Image from 'next/image';
import VideoImage from '../../public/images/youtube-image.png';
import styles from '../../styles/WhyBestChoices.module.css';

const WhyBestChoices = () => {
    return (
        <div className={styles.fullMainCont}>
            <div className={styles.mainCont}>
                <div className={styles.innerMainCont}>
                    <div className={styles.contText}>
                        <div style={{ width: '95%' }}>
                            <h2>Why Enver Is The Best Choice?</h2>
                        </div>
                    </div>
                    <div className={styles.contText2}>
                        <p>Watch this one minute video so you understand why you should use our services!</p>
                    </div>
                </div>

                <div className={styles.contSecImage}>
                    <div className={styles.divImage}>
                        <Image
                            src={VideoImage}
                            alt="Video"
                            width={1200}
                            height={670}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyBestChoices;
