export const styles = {
    wrapper: {
        backgroundColor: 'white',
        width: '700px',
        height: '100vh',
        paddingTop: '50px'
    },
    infoGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '10px',
        borderBottom: '1px solid #0002'
    },

    orderSummary: {
        width: '100%',
        minHeight: '100vh',
        maxHeight: '100%',
        backgroundColor: 'rgba(239,238,238,0.55)',
        marginBottom: '50px'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginTop: '16px',
    },
    title: {
        marginBottom: '16px',
        color: '#232323',
        fontSize: {
            lg: '26px',
            md: '24px',
            xs: '24px'
        },
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    },

    subtitle: {
        marginBottom: '16px',
        color: 'rgb(49,129,33)',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        fontSize: {
            lg: '20px',
            md: '18px',
            xs: '16px'
        },
    },
    sectionTitle: {
        marginBottom: '16px',
        color: 'rgb(0,0,0)',
        fontSize: {
            lg: '20px',
            md: '18px',
            xs: '18px'
        },
    },
    list: {},
    listItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingBottom: '20px',
        borderBottom: '1px solid #0002',
        marginBottom: '20px'
    },
    divider: {
        margin: '16px 0',
        backgroundColor: '#ddd',
    },
    productHeader: {
        marginBottom: '8px',
        color: '#555',
        fontWeight: 'bold',
    },
    productItem: {
        padding: '16px',
        maxHeight: '400px',
        overflow: 'auto',
    },
    productBox: {
        marginTop: '20px',
        padding: '8px',
        borderRadius: '4px',
        backgroundColor: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        width: '100%',
        borderBottom: '1px solid #cdcdcd'
    },
    productDetails: {
        display: 'flex',
        flexDirection: {
            lg: 'row',
            md: 'row',
            xs: 'column',
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '8px',
        gap: '20px',
        padding: '20px',
    },
    image: {
        width: '90px',
        height: '90px',
        objectFit: 'contain',
        objectPosition: 'center',
        borderRadius: '4px',
        marginRight: '16px',
    },
    productTitle: {
        flexGrow: 1,
        color: '#333',
        fontWeight: '500',
        maxWidth: '500px',
        fontSize: {
            lg: '20px',
            md: '18px',
            xs: '24px',
        }
    },
    productPrice: {
        color: '#41ae2a',
        fontWeight: 'bold',
        textAlign: 'center',
        maxWidth: '100px',
        fontSize: '24px'
    },
    totalPriceItem: {
        paddingTop: '16px',
    },
    totalPrice: {
        fontSize: {
            lg: '26px',
            md: '24px',
            xs: '20px',
        }
    },
    productAmount: {
        textAlign: 'center',

        width: '100px',
        fontSize: {
            lg: '26px',
            md: '24px',
            xs: '24px',
        }
    },
    buttonInfo: {
        '&.MuiButton-root': {
            marginLeft: '20px',
            padding: '0 5px',
            border: 'unset',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },

        '&.MuiButton-contained': {
            backgroundColor: 'transparent',
            color: 'rgb(66,175,42)',
            border: 'unset',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: 'transparent',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'transparent',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
    buttonMain: {
        '&.MuiButton-root': {
            padding: '5px 40px',
            border: 'unset',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },

        '&.MuiButton-contained': {
            backgroundColor: 'rgb(66,175,42)',
            color: 'rgb(255,255,255)',
            border: 'unset',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: 'rgb(253,102,31)',
                color: 'rgb(255,255,255)',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'transparent',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
    summaryInfoContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '30px',
        width: '100%',
    },
    icon: {
        fontSize: '100px',
        color: 'rgb(66,175,42)'
    },
    infoText: {
        fontSize: {
            lg: '20px',
            md: '20px',
            xs: '15px',
        },

        color: 'rgba(0,0,0,0.61)'
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    viewProducts: {
        height: '50px',
        marginBottom: '20px'
    },
    titleButton: {
        fontSize: {
            lg: '20px',
            md: '20px',
            xs: '18px',
        },
        fontWeight: 'bold',
        backgroundColor: '#fb651f',
        width: '100%',
        textAlign: 'center',
        padding: {
            lg: '5px 0',
            md: '10px 0',
            xs: '10px 0',
        },
        borderRadius: '8px',
        color: 'white',
    },
    priceAmountWrapper: {
        display: 'flex',
        flexDirection: {
            lg: 'column',
            md: 'column',
            row: 'column',
        },
        justifyContent: {
            xs: 'space-between'
        },
        width: {
            lg: '100px',
            md: '100px',
            xs: '100%',
        },
        alignItems: 'center'
    }
}