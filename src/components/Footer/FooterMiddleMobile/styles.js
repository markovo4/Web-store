export const styles = {
    section: {
        display: {
            lg: 'none',
            md: 'none',
            xs: 'flex'
        },
        height: {
            xs: 'auto',
        },

        border: {
            lg: '2px solid rgba(0,0,0,0.09)'
        },
        borderBottom: {
            md: '2px solid rgba(0,0,0,0.09)'
        },
        backgroundColor: {
            xs: '#ececec',
        }
    },
    container: {
        height: {
            xs: 'auto'
        },
        display: 'flex',
    },
    qRCodeContainer: {
        display: {
            xs: 'none'
        },
        padding: '16px',
        border: {
            lg: '2px solid rgba(0,0,0,0.09)'
        },
        borderRadius: '8px',
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
        borderRadius: '8px',
        backgroundColor: 'white',
        width: {

            xs: '100%',
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
        padding: '15px',
        borderRadius: '8px',
        flexDirection: 'column',
        width: {
            xs: '100%',
        },
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
        },
        '&:active': {
            backgroundColor: 'white',
        },
        '&:focus': {
            backgroundColor: 'white',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'white',
        },
    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
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
        flexDirection: 'column',
        alignItems: 'start',
        gap: '10px',
    },
    title: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.7)'
    },

    collapse: {
        backgroundColor: 'white',
        width: '100%'
    },
    arrowIcon: {
        border: '1px solid #0003',
        borderRadius: '50%',
        color: '#0009'
    }

};