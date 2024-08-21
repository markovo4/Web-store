export const styles = {
    section: {
        backgroundColor: '#eeeeee',
        minHeight: '100vh',
        maxHeight: '100%'
    },
    wrapper: {
        maxWidth: '1200px',
        display: 'flex',
        flexDirection: {
            lg: 'row',
            md: 'column'
        },
        gap: {
            lg: '50px',
            md: '0'
        }
    },
    placeOrder: {
        width: {
            lg: '350px',
            md: '100%'
        },
        padding: '0px',
        position: 'sticky',
        height: '300px',
        top: '20px'
    },
    productsList: {
        width: {
            lg: '800px',
            md: '100%'
        },
    },
    titleBack: {
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.79)'
    },
    titleCount: {
        color: 'rgba(0,0,0,0.58)'
    },
    deleteButton: {
        '&.MuiButton-root': {
            padding: '5px 5px',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },
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
    totalPrice: {
        padding: 'unset',
        width: '300px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    loginButton: {
        '&.MuiButton-root': {
            padding: '2px 5px',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },

        '&.MuiButton-outlined': {
            backgroundColor: '#ffffff',
            color: 'rgb(46,124,50)',
            border: 'unset',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: 'rgba(46,124,50,0.09)',
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
    sideBar: {
        backgroundColor: 'white',
        marginBottom: ' 5px'
    },
    buttonPlaceOrder: {
        '&.MuiButton-root': {
            padding: '8px 5px',
            margin: '20px 0',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: {
                lg: '300px',
                md: '80vw'
            },
        },
        '&.MuiButton-outlined': {
            backgroundColor: '#41ae2a',
            color: 'rgb(255,255,255)',
            border: 'unset',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: 'rgb(253,102,31)',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'rgb(208,84,25)',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
    totalPriceSub: {
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.8)',
    },
}