export const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch', // Ensure the content takes all the vertical space
        flexDirection: {
            lg: 'row',
            md: 'row',
            xs: 'unset',
        },
        width: '100vw',
    },
    imageWrapper: {
        width: {
            lg: '60vw',
            md: '60vw',
            xs: '100%',
        },
        display: {
            lg: 'flex',
            md: 'flex',
            xs: 'none',
        },
        alignItems: 'center',
        margin: '5px',
        backgroundColor: 'white',
        flexGrow: 1, // Allow imageWrapper to take up available space
    },
    imageWrapperMobile: {
        display: {
            lg: 'none',
            md: 'none',
            xs: 'flex',
        },
        borderTop: '1px solid #0001',
        borderBottom: '1px solid #0001',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: {
            lg: '650px',
            md: '50vw',
            xs: '100%',
        },
        padding: '32px',
        gap: '20px',
        margin: '5px 0',
        backgroundColor: 'white',
        flexGrow: 1, // Allow wrapper to take up available space
    },
    wrapperDescription: {
        display: 'flex',
        flexDirection: 'column',
        width: {
            lg: '650px',
            md: '50vw',
            xs: '100%',
        },
        padding: '32px',
        gap: '40px',
        margin: '5px 0',
        backgroundColor: 'white',
        overflowY: 'auto',
        flexGrow: 1, // Allow wrapperDescription to take up available space
    },
    rating: {
        display: 'flex',
        width: '100%',
        justifyContent: {
            lg: 'flex-start',
            md: 'flex-start',
            xs: 'space-between',
        },
        gap: {
            lg: '50px',
            md: '50px',
            xs: '0',
        },
        alignItems: 'center',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%', // Occupy the full height of the container
        position: 'sticky',
        width: '70vw',
        top: '0',
        flexGrow: 1, // Allow info to take up available space
    },
    count: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        fontSize: '14px',
        color: 'rgba(0,0,0,0.54)',
    },
    price: {
        marginTop: '0px',
        fontSize: {
            lg: '30px',
            md: '30px',
            xs: '1.2rem',
        },
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.77)',
    },
    productTitle: {
        marginTop: '0px',
        fontSize: {
            lg: '30px',
            md: '30px',
            xs: '1.2rem',
        },
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.77)',
    },
    wrapperPurchase: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: {
            lg: '650px',
            md: '50vw',
            xs: '100%',
        },
        padding: '32px',
        gap: '40px',
        margin: '0',
        backgroundColor: 'white',
    },
    buttonGroup: {
        display: 'flex',
        gap: '20px',
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
            height: '55px',
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
            },
        },
    },
    priceOriginal: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    discount: {
        fontSize: {
            lg: '12px',
            md: '12px',
            xs: '8px',
        },
        color: 'white',
        padding: '0 2px',
        borderRadius: '10px',
        backgroundColor: 'red',
    },
    underTitleIconsText: {
        fontSize: '12px',
        width: 'auto',
        flexGrow: 1,
    },
    underTitleIconsContainer: {
        display: 'flex',
        gap: '15px',
        width: '100%',
        border: '1px solid rgba(204,204,204,0.36)',
        borderRadius: '10px',
        '&:not(:first-of-type)': {
            marginLeft: {
                lg: '10px',
                md: 'unset',
                xs: 'unset',
            },
        },
        marginBottom: {
            lg: 'unset',
            md: '10px',
        },
    },
    ratingColor: {
        color: "#fa8231",
        fontSize: '14px',
    },
    code: {
        display: {
            lg: 'flex',
            md: 'flex',
            xs: 'none',
        },
        fontSize: '12px',
        width: '100px',
        color: 'rgba(0,0,0,0.50)',
    },
    codeMobile: {
        display: {
            lg: 'none',
            md: 'none',
            xs: 'flex',
        },
        fontSize: '12px',
        width: '100px',
        color: 'rgba(0,0,0,0.50)',
    },
    additionalIconsContainer: {
        display: 'flex',
        flexDirection: {
            lg: 'row',
            md: 'column',
            xs: 'column',
        },
        width: {
            lg: 'auto',
            md: '100%',
            xs: '100%',
        },
    },
};
