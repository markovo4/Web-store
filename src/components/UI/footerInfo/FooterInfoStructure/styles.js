export const styles = {
    title: {
        fontSize: {
            lg: '18px',
            md: '18px',
            xs: '16px',
        },
        fontWeight: 'bold',
        color: {
            lg: 'rgba(0,0,0,0.72)',
            md: 'rgba(0,0,0,0.72)',
            xs: 'rgb(46,46,46)'
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
        }
    },
    li: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '0',
        flexDirection: 'column',
        borderRadius: {
            lg: '0',
            md: '0',
            xs: '16px'
        },
        maxWidth: {
            lg: '25%',
            md: '25%',
            xs: '100%'
        },
        backgroundColor: 'white'
    },
}