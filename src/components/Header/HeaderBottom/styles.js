export const styles = {
    header: {
        height: '56px',
        backgroundColor: '#42af2a',
    },
    container: {
        display: 'flex',
        width: '1400px',
        height: 'inherit',
        margin: '0 auto',
        justifyContent: 'space-between',
        alignItems: 'center',
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
            justifyContent: 'space-between',
            height: '40px',
            borderRadius: 1,
            textTransform: 'none',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '110px',
        },
        '&.MuiButton-contained': {
            backgroundColor: 'unset',
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
    }
};
