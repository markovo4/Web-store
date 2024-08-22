export const styles = {
    footerBottom: {
        backgroundColor: {
            md: '#ececec',
            xs: '#ececec',
            lg: '#fff'
        },
        display: 'flex',
        alignItems: 'center',
        height: {
            lg: '50px',
            md: 'auto'
        }
    },
    socials: {
        display: {
            lg: 'flex',
            md: 'none',
            xs: 'none'
        },
        justifyContent: 'space-between',
        width: '100%',
        gap: '10px'
    },
    socialsMd: {
        display: {
            lg: 'none',
            md: 'flex',
            xs: 'flex',
        },
        justifyContent: 'space-between',
        width: '100%',
        gap: {
            md: '10px',
            xs: '10px'
        }
    },
    icon: {
        color: 'rgba(0,0,0,0.65)',
        position: {
            md: 'absolute',
            xs: 'absolute',
        },
        top: {
            md: '25%',
            xs: '20%',
        },
        left: {
            md: '25%',
            xs: '20%',
        },
    },

    liItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: {
            md: 'relative',
            xs: 'relative',
        },
        borderRadius: {
            md: '50px',
            xs: '50px',
        },
        padding: {
            md: '25px',
            xs: '20px',
            lg: '20px'
        },
        backgroundColor: {
            md: 'rgba(0,0,0,0.12)',
            xs: 'rgba(0,0,0,0.12)',
            lg: 'transparent'
        }
    },
    container: {
        display: 'flex',
        justifyContent: {
            md: 'center',
            xs: 'center',
            lg: 'space-between'
        },
        height: {
            md: '250px',
            xs: '250px',
            lg: 'unset'
        }
    },
    rights: {
        display: 'flex',
        paddingTop: {
            md: '10px',
            xs: '10px',
            lg: '0'
        },
        flexDirection: {
            md: 'column',
            xs: 'column',
            lg: 'row'
        },
        alignItems: 'center',
        gap: {
            lg: '40px'
        }
    }
}