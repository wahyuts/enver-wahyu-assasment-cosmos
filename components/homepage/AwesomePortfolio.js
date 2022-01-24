import Image from 'next/image';
import Circle from '../../public/images/double-circle.png';
import styles from '../../styles/AwesomePortfolio.module.css';

const AwesomePortfolio = () => {
    return (
        <div className={styles.fullMainCont}>
            <div className={styles.mainCont}>
                <div style={{ width: '60%' }}>
                    <h2 style={{ textAlign: 'left' }}>Our Awesome Portofolio</h2>
                </div>
            </div>
            <div className={styles.divImageHiasan4}>
                <Image src={Circle} alt="Triangle" width={10} height={10} layout="responsive" objectFit="contain" />
            </div>
        </div>
    );
};

export default AwesomePortfolio;
