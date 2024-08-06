export const styles = {
    imageWrapper: {
        width: '550px',
        height: '890px',
        display: 'flex',
        alignItems: 'center',
        margin: '5px',
        backgroundColor: 'white'
    },
    image: {
        width: '550px',
        padding: '32px'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '650px',
        maxHeight: '304px',
        padding: '32px',
        gap: '40px',
        margin: '5px 0',
        backgroundColor: 'white'
    },
    wrapperDescription: {
        display: 'flex',
        flexDirection: 'column',
        width: '650px',
        maxHeight: '535px',
        padding: '32px',
        gap: '40px',
        margin: '5px 0',
        backgroundColor: 'white',
        overflowY: 'auto'
    },
    rating: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-start',
        gap: '50px',
        alignItems: 'center'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'sticky',
        top: '0'
    },
    count: {
        marginTop: '8px',
        fontSize: '20px',
        color: '#000'
    },
    price: {
        marginTop: '8px',
        fontSize: '30px',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.77)'
    },
    wrapperPurchase: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '650px',
        maxHeight: '304px',
        padding: '32px',
        gap: '40px',
        margin: '0',
        backgroundColor: 'white'
    },
    buttonGroup: {
        display: 'flex',
        gap: '20px'
    },
    button: {
        '&.MuiButton-root': {
            padding: '13px 15px',
            borderRadius: '10px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '50px',
        },
        '&.MuiButton-contained': {
            backgroundColor: '#42af2a',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#fd661f',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#fd661f',
            },

        },
        '&.MuiButton-outlined': {
            backgroundColor: '#ebf6e8',
            color: '#fff',
            border: '0px',
            '&:hover': {
                backgroundColor: '#ebf6e8',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#ebf6e8',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
}