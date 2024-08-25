export const styles = {
    listStyles: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: {
            lg: 'row',
            md: 'row',
            xs: 'column'
        },
        gap: {
            lg: '50px',
            md: '0',
            xs: '0',
        },
        margin: '4px 0',
        padding: {
            lg: '0 50px',
            md: '0 50px',
            xs: '15px',
        },
        height: {
            lg: '214px',
            md: '214px',
            xs: 'auto'
        },

        '&:not(:last-of-type)': {
            borderBottom: '1px solid rgba(175,175,175,0.31)',
        }
    },
    price: {
        fontWeight: 'bold',
        fontSize: {
            lg: '24px',
            md: '24px',
            xs: '20px',
        },
        color: '#363636',
        textAlign: 'right'

    },
    code: {
        fontSize: '12px',
        width: '100px',
        color: 'rgba(0,0,0,0.50)'
    },
    priceStrike: {
        fontSize: '12px',
        color: '#b6b6b6',
        height: '10px'
    },

    totalPriceOriginalMain: {
        width: '100%',
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: '25px',
        color: 'rgb(52,52,52)',
        height: '30px'
    },
    priceContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: {
            lg: 'unset',
            md: 'unset',
            xs: '100%',
        }
    },
    priceDiscount: {
        display: 'flex',
        flexDirection: 'column'
    },
    productInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '20px'
    },
    title: {
        width: {
            lg: '260px',
            md: '260px',
        }
    },
    itemCount: {
        width: {
            lg: '80px',
            md: '80px',
        },
        display: {
            lg: 'flex',
            md: 'flex',
            xs: 'none',
        }
    },
    itemCountMobile: {
        display: {
            lg: 'none',
            md: 'none',
            xs: 'flex',
        },
        fontSize: '18px',
        fontWeight: '500'
    }
}