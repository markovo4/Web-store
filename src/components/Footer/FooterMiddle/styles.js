export const styles = {
    section: {
        height: {
            lg: '450px',
            md: 'auto'
        },

        border: {
            lg: '2px solid rgba(0,0,0,0.09)'
        },
        borderBottom: {
            md: '2px solid rgba(0,0,0,0.09)'
        }
    },
    container: {
        height: {
            lg: '430px',
            md: 'auto'
        },
        display: 'flex',
    },
    qRCodeContainer: {
        display: {
            lg: 'flex',
            md: 'none'
        },
        padding: '16px',
        border: {
            lg: '2px solid rgba(0,0,0,0.09)'
        },
        borderRadius: '12px',
        maxWidth: '295px',
        marginBottom: '8px',
        marginTop: '25px'
    },
    qRCodeText: {
        marginLeft: '8px',
        width: '150px',
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '16px',
        border: '1px solid rgba(0,0,0,0.09)',
        borderRadius: '12px',
        width: {
            lg: '295px',
            md: '100%'
        },
    },
    formTitle: {
        width: '100%',
        height: '25px'
    },
    formSubtitle: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        color: 'rgba(0,0,0,0.61)',
        fontSize: '16px'
    },
    emailSubmit: {
        // Base styles for all button variants
        '&.MuiButton-root': {
            marginTop: '8px',
            padding: '5px 16px',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },
        // Styles for contained buttons
        '&.MuiButton-contained': {
            backgroundColor: '#41ae2a',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#389524',
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
    li: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '0',
        flexDirection: 'column',
        maxWidth: '25%'
    },
    liForm: {
        display: 'flex',
        padding: '0',
        flexDirection: 'column',
    },
    list: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        flexFlow: {
            lg: 'nowrap',
            md: 'wrap'
        },
        alignItems: 'start',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.72)'
    },
    subtitle: {
        fontSize: '15px',
        color: 'rgba(0,0,0,0.65)',
        '&:hover': {
            textDecoration: 'underline',
            color: 'rgba(0,0,0,0.85)',
        }
    },
    phoneNumber: {
        color: '#41ae2a',
        fontWeight: 'bold',
        fontSize: '22px',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    phoneNumberLi: {
        paddingTop: '0',
        paddingBottom: '0',
    },
    linkServices: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',

        '&:hover': {
            textDecoration: 'underline'
        }
    }

};