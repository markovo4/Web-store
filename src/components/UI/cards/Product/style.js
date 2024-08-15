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
        gap: '20px',
        margin: '5px 0',
        backgroundColor: 'white'
    },
    wrapperDescription: {
        display: 'flex',
        flexDirection: 'column',
        width: '650px',
        maxHeight: '475px',
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
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        fontSize: '14px',
        color: 'rgba(0,0,0,0.54)'
    },
    price: {
        marginTop: '0px',
        fontSize: '30px',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.77)'
    },
    wrapperPurchase: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
            fontSize: '20px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '50px',
            height: '55px'
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
    priceOriginal: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    priceStrike: {
        fontSize: '16px',
        color: '#b6b6b6'
    },
    discount: {
        fontSize: '14px',
        color: 'white',
        padding: '0 2px',
        borderRadius: '10px',
        backgroundColor: 'red'
    },
    underTitleIconsText: {
        fontSize: '12px',
        width: 'auto',
        flexGrow: 1
    },
    underTitleIconsContainer: {
        display: 'flex',
        gap: '15px',
        width: '100%',
        border: '1px solid rgba(204,204,204,0.56)',
        borderRadius: '10px'
    },
    ratingColor: {
        color: "#fa8231",
        fontSize: '14px'
    },
    code: {
        fontSize: '12px',
        width: '100px',
        color: 'rgba(0,0,0,0.50)'
    }
}