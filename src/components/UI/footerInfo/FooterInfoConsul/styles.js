export const styles = {
    title: {
        fontSize: {
            lg: '18px',
            md: '18px',
            xs: '18px',
        },
        fontWeight: 'bold',
        color: {
            lg: 'rgba(0,0,0,0.72)',
            md: 'rgba(0,0,0,0.72)',
            xs: 'rgba(0,0,0,0.7)'
        }
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
        },
    },
    li: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '0',
        flexDirection: 'column',
        borderRadius: {
            lg: '0',
            md: '0',
            xs: '8px'
        },
        maxWidth: {
            lg: '25%',
            md: '25%',
            xs: '100%'
        },
        backgroundColor: 'white'
    },
    serviceIconHelp: {
        color: 'white',
        backgroundColor: '#3ba624',
        borderRadius: '50%',
        padding: '3px',
        fontSize: '35px'
    },
    serviceIconChat: {
        color: 'white',
        backgroundColor: '#fd661f',
        borderRadius: '50%',
        padding: '5px',
        fontSize: '35px'
    },
    serviceIconMessenger: {
        color: 'white',
        backgroundColor: '#35a5dc',
        borderRadius: '50%',
        padding: '5px',
        fontSize: '35px'
    },
    serviceIconViber: {
        color: 'white',
        backgroundColor: '#7a41ac',
        borderRadius: '50%',
        padding: '5px',
        fontSize: '35px'
    },
    serviceIconTelegram: {
        color: 'white',
        backgroundColor: '#2b97ee',
        borderRadius: '50%',
        padding: '5px',
        fontSize: '35px'
    },
    iconWrapper: {
        border: {
            lg: 'none',
            md: 'none',
            xs: '1px solid #0002'
        },
        borderRadius: '4px'
    },
    consulWrapper: {
        width: '100%',
        padding: {
            lg: '8px 0',
            md: '8px 0',
            xs: '16px'
        },
        display: 'flex',
        flexDirection: 'column',
        gap: {
            lg: '0',
            md: '0',
            xs: '12px',
        }
    }
}