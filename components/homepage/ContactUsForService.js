import Image from 'next/image';
import Circle from '../../public/images/double-circle.png';
import AddIcon from '../../public/images/add-icon.png';
import styles from '../../styles/ContactUsForService.module.css';

const ContactUsForTheService = () => {
    return (
        <div className={styles.fullMainCont}>
            <div className={styles.mainCont}>
                <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '65%', marginRight: 10 }}>
                        <div style={{ width: '100%' }}>
                            <h2 style={{ textAlign: 'left' }}>Contact us for the service you want to use</h2>
                        </div>
                    </div>
                    <div style={{ width: '35%' }}>
                        <div className={styles.btnContactUs}>Contact us</div>
                    </div>
                </div>
            </div>
            <div className={styles.divImageHiasan4}>
                <Image src={AddIcon} alt="Add" width={10} height={10} layout="responsive" objectFit="contain" />
            </div>
            <div className={styles.divImageHiasan2}>
                <Image src={Circle} alt="Circle" width={10} height={10} layout="responsive" objectFit="contain" />
            </div>
        </div>
    );
};

export default ContactUsForTheService;
