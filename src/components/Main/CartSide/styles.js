export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '0',
        right: '0',
        width: {
            lg: '69%',
            md: '100vw',
            xs: '100vw'
        },
        minHeight: '100vh',
        bgcolor: 'rgb(255,255,255)',
        borderRadius: '5px 0 0 5px',
        boxShadow: 1,
        p: {
            lg: 4,
            md: 4,
            xs: 2
        },
    },
    modal: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: {
            lg: '25px',
            md: '25px',
            xs: '18px'
        },
        color: '#000000',
        letterSpacing: '2px',
        paddingLeft: {
            lg: '50px',
            md: '50px',
            xs: '0'
        }
    },
    wrapper: {},
    buttonContinue: {

        '&.MuiButton-root': {
            padding: '5px 10px',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: {
                lg: '64px',
                md: '90vw',
                xs: '90vw',
            },
        },

        '&.MuiButton-contained': {
            backgroundColor: 'rgba(255,255,255,0.16)',
            border: '1px solid rgba(0,0,0,0.16)',
            color: 'rgba(0,0,0,0.61)',
            '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.06)',
                color: 'rgba(0,0,0,0.9)',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'rgba(225,92,31,0.73)',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        }

    },
    buttonChoice: {

        '&.MuiButton-root': {
            padding: '5px 40px',
            borderRadius: '10px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: {
                lg: '64px',
                md: '90vw',
                xs: '90vw',
            },
        },

        '&.MuiButton-contained': {
            backgroundColor: '#41ae2a',
            border: '2px solid #40ad2a',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#fd661f',
                border: '2px solid #fd661f',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'rgba(225,92,31,0.73)',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        },
        '&.MuiButton-outlined': {
            backgroundColor: '#ffffff',
            fontWeight: 'bold',
            border: '2px solid #40ad2a',
            color: '#40ad2a',
            '&:hover': {
                border: '2px solid #fd661f',
                color: '#fd661f',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'rgba(225,92,31,0.73)',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
    buttonClose: {

        '&.MuiButton-root': {
            padding: '13px 0',
            borderRadius: '100px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },

        '&.MuiButton-contained': {
            backgroundColor: 'rgba(255,255,255,0.16)',
            border: 'unset',
            color: 'rgba(0,0,0,0.61)',
            '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.06)',
                color: 'rgba(0,0,0,0.9)',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'rgba(255,255,255,0.73)',
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
        flexDirection: {
            lg: 'row',
            md: 'column',
            xs: 'column'

        },
        gap: {
            lg: '0',
            md: '30px',
            xs: '10px'
        },
        paddingBottom: '30px',
        borderBottom: '1px solid grey'
    },
    buttons: {
        display: 'flex',
        flexDirection: {
            lg: 'row',
            md: 'column',
            xs: 'column'
        },
        gap: '10px'
    },
    closeIcon: {
        color: '#000',
        fontSize: {
            lg: '30px',
            md: '30px',
        }
    }
}
