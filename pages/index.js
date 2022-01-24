import Head from 'next/head';
// import Image from 'next/image';

import { makeStyles } from '@mui/styles';
import MainBanner from '../components/homepage/MainBanner';
import WhyBestChoices from '../components/homepage/WhyBestChoices';
import TheServiceWeProvide from '../components/homepage/TheServiceWeProvide';
import CardListService from '../components/homepage/CardListService';
import AwesomePortfolio from '../components/homepage/AwesomePortfolio';
import CardListPortfolio from '../components/homepage/CardListPortfolio';
import ContactUsForTheService from '../components/homepage/ContactUsForService';

const useStyles = makeStyles((theme) => ({
    fullMainCont: {
        width: '89%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 200,
        backgroundColor: 'brown'
    }
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>Judul Web || Home</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainBanner />
            <WhyBestChoices />

            {/** Ini satu paket judul sama content */}
            <TheServiceWeProvide />
            <CardListService />
            {/************************************ */}

            {/** Ini satu paket judul sama content */}
            <AwesomePortfolio />
            <CardListPortfolio />

            <ContactUsForTheService />
        </div>
    );
}
