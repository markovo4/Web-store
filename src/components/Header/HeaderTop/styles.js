export const styles = {
    header: {
        backgroundColor: {
            lg: 'white',
            md: '#42AF2AFF',
            xs: '#42AF2AFF',
        },
        height: {
            lg: '75px',
            md: '75px',
            xs: '75px',
        },
    },
    container: {
        display: {
            lg: 'flex',
            md: 'none',
            xs: 'none'
        },
        width: '1400px',
        height: 'inherit',
        margin: '0 auto',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    logoContainer: {
        display: {
            lg: 'none',
            md: 'flex',
            xs: 'flex'
        },
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px',
        borderBottom: {
            xs: '1px solid #0002',
            md: '1px solid #0002'
        }
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '340px'
    },
    button: {
        '&.MuiButton-root': {
            padding: '2px 16px',
            height: '45px',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '100px',
        },
        '&.MuiButton-contained': {
            backgroundColor: '#42AF2AFF',
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
        }
    },
    selector: {
        width: '200px',
        '& .MuiInputBase-root': {
            height: '30px',
            backgroundColor: '#fff',
            borderColor: '#fff',
            width: '200px'
        },
        '& .MuiOutlinedInput-input': {
            height: '30px',
            padding: '0 14px',
            boxSizing: 'border-box',
            width: '200px'
        },
        '& .MuiInputLabel-root': {
            top: '-12px',
            left: '14px',
            transform: 'translate(0, 16px) scale(1)',
            width: '200px'
        },
        '& .MuiInputLabel-shrink': {
            transform: 'translate(0, 0px) scale(0.75)',
            color: '#40ab29',
            width: '200px'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root': {
            transform: 'translate(0, 0px) scale(0.75)',
            width: '200px'
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#c2c2c2',
            width: '200px'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#40ab29',
            width: '200px'
        }
    },
    buttonLogOut: {
        '&.MuiButton-root': {
            padding: '2px 16px',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },
        '&.MuiButton-contained': {
            backgroundColor: '#fd661f',
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
        }
    },
    navList: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%'
    },
    li: {
        maxWidth: '110px',
        '&:nth-of-type(3)': {
            maxWidth: '80px'
        }
    },
    liButton: {
        maxWidth: '150px',
        padding: 'unset'
    },
    discounts: {
        width: '100%',
        padding: '5px 10px',
        color: 'white',
        borderRadius: '20px',
        backgroundColor: '#fd0000'
    },
    giftCards: {
        width: '100%',
        '&:hover': {
            color: '#fd661f'
        }
    },
    liMore: {
        display: 'flex',
        gap: '20px',
        maxWidth: '120px',
        marginLeft: '10px',
        '&:hover': {
            color: '#fd661f'

        }
    },
    liContact: {
        display: 'flex',
        gap: '20px',
        maxWidth: '160px',
        marginLeft: '10px',
        color: '#fd661f',
        '&:hover': {
            color: '#fd661f'
        }
    },
    menuItem: {
        display: 'flex',
        gap: '5px',
        width: '155px',
        height: '100%',
        padding: '10px 20px',
        '&:hover': {
            backgroundColor: '#f1f1f1',
            textDecoration: 'underline',
            color: '#fd661f'
        },
    },
    phoneNumber: {
        letterSpacing: '2px',
        color: 'rgba(0,0,0,0.7)',
        fontSize: '14px'
    },
    phoneNumberLast: {
        paddingLeft: '30px',
        letterSpacing: '2px',
        color: 'rgba(0,0,0,0.7)',
        fontSize: '14px'
    },
    liPhone: {
        width: '330px',
    },
    number: {
        fontWeight: 'bold',
        color: '#000',
        textDecoration: 'underline'
    },
}