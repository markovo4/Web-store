export const styles = {
    productIcon: {
        backgroundColor: 'white',
        width: {
            lg: '100px',
            md: '100px',
            xs: '70vw'
        },
        height: {
            lg: '100px',
            md: '100px',
            xs: 'auto'
        },
        marginBottom: {
            lg: 'unset',
            md: 'unset',
            xs: '20px',
        }
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
                md: '100%'
            },
            fontSize: '20px',
            color: 'rgb(0,0,0)',
            paddingLeft: '6px',
            '&:hover': {
                textDecoration: 'underline'
            },
            marginBottom: {
                lg: '0',
                md: '0',
                xs: '10px',
            }
        }
    },

    priceCounter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: {
            lg: 'unset',
            md: 'unset',
            xs: 'space-between',
        },
        flexDirection: {
            lg: 'column',
            md: 'column',
            xs: 'row',
        },
        gap: {
            lg: '20px',
            md: '20px',
            xs: '0',
        },
        width: {
            lg: 'auto',
            md: 'auto',
            xs: '100%',
        }
    },
    priceInfoContainer: {
        display: 'flex',
        flexDirection: {
            lg: 'column',
            md: 'column',
            xs: 'column',
        }
    },

    button: {
        // Base styles for all button variants
        '&.MuiButton-root': {
            display: {
                lg: 'flex',
                md: 'flex',
                xs: 'flex'
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
    buttonGroup: {
        display: 'flex',
        gap: '20px',
        marginBottom: {
            lg: '0',
            md: '0',
            xs: '40px',
        },
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
        width: {
            lg: '50%',
            md: '50%',
            xs: '100%',
        }
    }
}
