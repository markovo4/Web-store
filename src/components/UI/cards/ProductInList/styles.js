export const styles = {
    card: {
        padding: '16px',
        marginLeft: '8px',
        display: 'flex',
        flexDirection: 'column',
        width: {
            lg: '280px',
            md: '390px',
            xs: '300px',
        },
        height: '570px',
        marginBottom: '8px',
        justifyContent: 'space-between',
        boxShadow: 'none',
        '&:hover': {
            transition: '0.3s',
            boxShadow: 10
        },
        borderRadius: {
            lg: '0',
            md: '5px',
            xs: '5px',
        }
    },
    cardMin: {
        padding: '16px',
        marginLeft: '2px',
        display: 'flex',
        flexDirection: 'column',
        width: {
            lg: '220px',
            md: '300px',
            xs: '300px',
        },
        height: '420px',
        marginBottom: '8px',
        justifyContent: 'space-between',
        boxShadow: {
            lg: 'none',
            md: '0px 1px 5px 0px rgba(0,0,0,0.16)',
            xs: '0px 1px 5px 0px rgba(0,0,0,0.16)',
        },
        '&:hover': {
            transition: '0.3s',
            boxShadow: '0px 1px 10px 1px rgba(0,0,0,0.22)',
        },
        border: {
            lg: 'none',
            md: '1px solid #0001',
            xs: '1px solid #0001'
        },
    },
    image: {
        marginTop: '40px',
        marginBottom: '20px',
        objectFit: 'contain',
        objectPosition: 'center',
        width: '190px',
        height: '240px',
        alignSelf: 'center',
        position: 'relative',
    },
    imageMin: {
        marginTop: '40px',
        marginBottom: '20px',
        objectFit: 'contain',
        objectPosition: 'center',
        width: '150px',
        height: '150px',
        alignSelf: 'center',
        position: 'relative',
    },
    title: {
        fontSize: '18px',
        marginTop: '8px',
        textAlign: 'left',
        color: '#000'
    },
    body: {
        textAlign: 'center',
        marginTop: '4px'
    },
    price: {
        marginTop: '8px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.77)'
    },
    rating: {
        textAlign: 'left',
        marginTop: '4px',
    },
    count: {
        marginTop: '8px',
        fontSize: '16px',
        color: 'rgba(0,0,0,0.6)'
    },
    wrapper: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    groupedText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative'
    },
    purchase: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
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
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
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
        fontSize: '14px',
        color: '#b6b6b6'
    },
    discount: {
        fontSize: '12px',
        color: 'white',
        padding: '0 2px',
        borderRadius: '10px',
        backgroundColor: 'red'
    },
    favButton: {
        position: 'absolute',
        right: '10px',
        top: '80px',
        backgroundColor: ' rgba(255,255,255,0.61)',
    },
    commentIcon: {
        color: 'rgba(0,0,0,0.4)'
    },
    tooltip: {
        backgroundColor: '#000'
    },
    additionalIcons: {
        display: {
            lg: 'flex',
            md: 'none',
            xs: 'none',
        },
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px'
    },

};
