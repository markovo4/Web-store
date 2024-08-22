export const styles = {
    header: {
        height: {
            lg: '56px',
            md: '70px',
            xs: '70px',
        },
        backgroundColor: '#42af2a',
        display: 'flex',
        justifyContent: 'center'
    },
    fixedHeader: {
        display: 'flex',
        justifyContent: 'center',
        height: {
            lg: '56px',
            md: '70px',
            xs: '70px',
        },
        backgroundColor: '#42af2a',
        position: 'fixed',
        zIndex: 100,
        top: '0',
        width: '100vw'
    },
    container: {
        display: {
            lg: 'flex',
            md: 'none',
            xs: 'none',
        },
        width: '1400px',
        height: 'inherit',
        margin: '0 auto',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerMd: {
        display: {
            lg: 'none',
            md: 'flex',
            xs: 'flex',
        },
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px',
        padding: '10px 15px',
        boxSizing: 'border-box',
        width: {
            md: '90vw',
            xs: '95vw',
        }
    },

    selectorMd: {
        '& .MuiInputBase-root': {
            height: '52px',
            backgroundColor: '#fff',
            borderColor: '#fff',
            border: 'none',
            width: {
                md: '70vw',
                xs: '70vw'
            },
        },
        '& .MuiOutlinedInput-input': {
            height: '52px',
            padding: '0',
            boxSizing: 'border-box',
        },
        '& .MuiInputLabel-root': {
            fontSize: '20px',
            top: '-5px',
            left: '14px',
            transform: 'translate(0, 16px) scale(1)',
            border: 'none',
        },
        '& .MuiInputLabel-shrink': {
            display: 'none',
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            display: 'none',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            display: 'none',
        },
    },
    authGroupMd: {
        display: 'flex',
        justifyContent: 'center',
        width: {
            md: '12vw',
            xs: '20vw'
        }
    },

    wrapper: {
        display: 'flex',
        alignItems: 'center',
        width: '500px',
        gap: '20px',
    },
    wrapperButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    selector: {
        display: {
            md: 'none',
            lg: 'flex'
        },
        '& .MuiInputBase-root': {
            height: '40px',
            backgroundColor: '#fff',
            borderColor: '#fff',
            width: '500px',
        },
        '& .MuiOutlinedInput-input': {
            height: '30px',
            padding: '0',
            boxSizing: 'border-box',
        },
        '& .MuiInputLabel-root': {
            top: '-8px',
            left: '14px',
            transform: 'translate(0, 16px) scale(1)',
        },
        '& .MuiInputLabel-shrink': {
            display: 'none',
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            display: 'none',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            display: 'none',
        },
    },
    separator: {
        backgroundColor: 'rgba(255,255,255,0.82)',
    },
    buttonFav: {
        '&.MuiButton-root': {
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '20px',
        },
        '&.MuiButton-contained': {
            backgroundColor: '#41ae2a',
            color: '#fff',
            '&:hover': {
                backgroundColor: 'unset',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'transparent',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            },
        },
    },
    buttonCart: {
        '&.MuiButton-root': {
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-evenly',
            height: '56px',
            borderRadius: 'unset',
            textTransform: 'none',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '150px',
        },
        '&.MuiButton-contained': {
            backgroundColor: '#389725',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#3fa829',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'rgba(225,92,31,0.73)',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            },
        },
    },
    buttonLogIn: {
        '&.MuiButton-root': {
            display: 'flex',
            gap: '10px',
            fontSize: {
                lg: '20px',
                md: '20px',
                xs: '14px',
            },
            justifyContent: {
                md: 'space-between',
                lg: 'space-between',
                xs: 'center'
            },
            height: {
                lg: '40px',
                md: '50px',
                xs: '50px',
            },
            borderRadius: 1,
            textTransform: 'none',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            width: {
                lg: '110px',
                md: '100%',
                xs: '20vw',
            },
        },
        '&.MuiButton-contained': {
            backgroundColor: {
                lg: 'unset',
                md: '#389725',
                xs: '#389725',
            },
            color: '#fff',
            '&:hover': {
                backgroundColor: '#389725',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'transparent',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            },
        },
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    cartItemCounter: {
        backgroundColor: 'rgba(253,102,31,0.9)',
        fontSize: '12px',
        fontWeight: 'bold',
        color: 'white',
        padding: '0 7px',
        borderRadius: '50px',
        zIndex: 1,
        position: 'absolute',
        top: '8px',
        right: '80px'
    },
    loginIcon: {
        fontSize: {
            md: '30px',
            lg: '30px'
        },
        display: {
            xs: 'none',
            md: 'flex'
        }
    }
};
