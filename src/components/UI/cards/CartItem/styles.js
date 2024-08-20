export const styles = {
    productIcon: {
        backgroundColor: 'white',
        width: '100px',
        height: '100px'
    },
    card: {
        display: 'flex',
        flexDirection: {
            lg: 'row',
            md: 'row',
            xs: 'column'
        },
        justifyContent: 'space-between',
        gap: {
            lg: '50px',
            md: '0'
        },
        margin: '4px 0',
        padding: '0 50px',
        height: {
            lg: '214px',
            md: '214px',
            xs: 'auto'
        },
        backgroundColor: 'white',
    },
    title: {
        width: '300px',
        marginBottom: '20px'
    },
    price: {
        fontSize: '24px',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.77)',
        width: '100px'
    },
    listItemTextTitle: {
        primary: {
            width: {
                lg: '400px',
                md: '70%'
            },
            fontSize: '20px',
            color: 'rgb(0,0,0)',
            paddingLeft: '6px',
            '&:hover': {
                textDecoration: 'underline'
            }
        }
    },

    priceCounter: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    button: {
        // Base styles for all button variants
        '&.MuiButton-root': {
            display: {
                lg: 'flex',
                md: 'flex',
                xs: 'none'
            },
            padding: '5px 10px',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px', // Ensure buttons have a minimum width
        },
        // Styles for contained buttons
        '&.MuiButton-outlined': {
            backgroundColor: '#ffffff',
            color: 'rgba(0,0,0,0.63)',
            border: 'unset',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.06)',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'rgba(0,0,0,0.12)',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
    availabilityText: {
        color: '#42af2a',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        paddingLeft: '6px'
    },
    priceOriginal: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'center'
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
    code: {
        padding: '6px',
        fontSize: '14px',
        width: '100px',
        color: 'rgba(0,0,0,0.50)'
    },
    infoContainer: {
        width: '50%'
    }
}
