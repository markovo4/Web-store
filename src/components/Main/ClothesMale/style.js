import image from './6445.jpg';

export const styles = {
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgb(255,247,244)',
        padding: '10px 20px',
        borderRadius: '50px',
        margin: '0 0 40px 0',
        fontWeight: 'bold',
        maxWidth: '250px',
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
};
