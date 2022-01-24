import Image from 'next/image';
import Triangle from '../../public/images/double-triangle.png';
import CrossIcon from '../../public/images/cross-miring-icon.png';
import styles from '../../styles/TheServiceWeProvide.module.css';

const TheServiceWeProvide = () => {
    return (
        <div className={styles.fullMainCont}>
            <div className={styles.mainCont}>
                <div style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <h2 style={{ textAlign: 'center' }}>The Service We Provide For You</h2>
                </div>
            </div>
            <div className={styles.divImageHiasan3}>
                <Image src={Triangle} alt="Triangle" width={10} height={10} layout="responsive" objectFit="contain" />
            </div>
            <div className={styles.divImageHiasan4}>
                <Image src={CrossIcon} alt="Cross" width={10} height={10} layout="responsive" objectFit="contain" />
            </div>
        </div>
    );
};

export default TheServiceWeProvide;
