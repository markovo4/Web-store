import {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {styles} from "./styles.js";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <Button
            variant='contained'
            sx={{
                ...styles.button,
                ...(visible ? styles.button['&.visible'] : {})
            }}
            onClick={scrollToTop}
        >
            <KeyboardArrowUpIcon/>
        </Button>
    );
};

export default BackToTop;
