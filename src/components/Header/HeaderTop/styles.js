export const styles = {
    header: {
        backgroundColor: 'white',
        height: '75px',


    },
    container: {
        display: 'flex',
        width: '1400px',
        height: 'inherit',
        margin: '0 auto',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '340px'
    },
    button: {
        // Base styles for all button variants
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
        // Styles for contained buttons
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
            borderColor: '#c2c2c2', // Set border color to white on hover
            width: '200px'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#40ab29', // Set border color to white on focus
            width: '200px'
        }
    },
    buttonLogOut: {
        // Base styles for all button variants
        '&.MuiButton-root': {
            padding: '2px 16px',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px', // Ensure buttons have a minimum width
        },
        // Styles for contained buttons
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

}