import image from './6445.jpg';

export const styles = {
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: {
            lg: 'space-evenly',
            md: 'flex-start',
            xs: 'flex-start',
        },
        gap: {
            lg: '0',
            md: '20px',
            xs: '20px',
        },
        backgroundColor: 'rgb(255,247,244)',
        padding: {
            lg: '10px 20px',
            md: '5px 20px',
            xs: '5px 20px',
        },
        borderRadius: '50px',
        margin: '0 0 40px 0',
        fontWeight: 'bold',
        maxWidth: {
            lg: '250px',
            md: '100%',
            xs: '100%'
        },
        color: 'rgba(0,0,0,0.86)',
        '&:hover': {
            transition: '0.2s',
            backgroundColor: 'rgb(65,174,42)',
            color: '#fff',
        },
    },
    section: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgb(253,142,31)',
        backgroundImage: `url(${image})`,
        backgroundBlendMode: 'screen',
        backgroundSize: '700px',
        backgroundRepeat: 'repeat',
        height: '900px',
    },
    container: {
        display: {
            lg: 'flex',
            md: 'none',
            xs: 'none',
        }
    },
    progressBar: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px'
    },
    slideList: {
        display: {
            lg: 'none',
            md: 'flex',
            xs: 'flex',
        },
        flexDirection: 'row',
        width: {
            lg: '98vw',
            md: '92vw',
            xs: '92vw',
        },
        overflowX: 'auto',
        overflowY: 'hidden',
        WebkitOverflowScrolling: 'touch',
        padding: 0,
        margin: 0,
        listStyle: 'none',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    slideItem: {
        flexShrink: 0,
        width: {
            md: '400px',
            xs: '320px'
        },
        padding: '0'
    },
    productsContainer: {
        width: '200px'
    }
};
