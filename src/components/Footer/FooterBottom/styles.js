export const styles = {
    footerBottom: {
        backgroundColor: {
            md: '#ececec',
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
            md: 'none'
        },
        justifyContent: 'space-between',
        width: '100%',
        gap: '10px'
    },
    socialsMd: {
        display: {
            lg: 'none',
            md: 'flex'
        },
        justifyContent: 'space-between',
        width: '100%',
        gap: {
            md: '10px'
        }
    },
    icon: {
        color: 'rgba(0,0,0,0.65)',
        position: {
            md: 'absolute'
        },
        top: {
            md: '25%'
        },
        left: {
            md: '25%'
        },
    },

    liItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: {
            md: 'relative'
        },
        borderRadius: {
            md: '50px'
        },
        padding: {
            md: '25px',
            lg: '20px'
        },
        backgroundColor: {
            md: 'rgba(0,0,0,0.12)',
            lg: 'transparent'
        }
    },
    container: {
        display: 'flex',
        justifyContent: {
            md: 'center',
            lg: 'space-between'
        },
        height: {
            md: '220px',
            lg: 'unset'
        }
    },
    rights: {
        display: 'flex',
        paddingTop: {
            md: '10px',
            lg: '0'
        },
        flexDirection: {
            md: 'column',
            lg: 'row'
        },
        alignItems: 'center',
        gap: {
            lg: '40px'
        }
    }
}