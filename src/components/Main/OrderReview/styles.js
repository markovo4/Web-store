export const styles = {
    container: {
        padding: '24px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginTop: '16px',
    },
    heading: {
        marginBottom: '16px',
        color: '#333',
        fontWeight: 'bold',
    },
    list: {
        padding: '0',
    },
    listItem: {
        padding: '8px 0',
        borderBottom: '1px solid #ddd',
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
        padding: '16px 0',
        maxHeight: '300px',
        overflow: 'auto',
    },
    productBox: {
        padding: '8px',
        borderRadius: '4px',
        backgroundColor: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        width: '100%',
        borderBottom: '1px solid #cdcdcd'
    },
    productDetails: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '8px',
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
        maxWidth: '500px'
    },
    productPrice: {
        color: '#41ae2a',
        fontWeight: 'bold',
        maxWidth: '100px'
    },
    totalPriceItem: {
        paddingTop: '16px',
    },
    productAmount: {
        fontWeight: 'bold',
        maxWidth: '100px',
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
    }
}