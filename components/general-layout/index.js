import Headnav from '../headnav';
import Footer from '../footer';

import { makeStyles } from '@mui/styles';

//General layout sudah menerapkan sticky nottom footer dengan sistem flex
const useStyles = makeStyles(() => ({
    contGeneral: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        '& .children-flex': {
            flex: '1 0 auto'
        }
    }
}));

const GeneralLayout = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.contGeneral}>
            <Headnav />
            <div className="children-flex">{children}</div>
            <Footer />
        </div>
    );
};

export default GeneralLayout;
