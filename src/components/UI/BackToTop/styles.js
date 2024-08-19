// styles.js
export const styles = {
    button: {
        borderRadius: '50px',
        padding: '10px 10px',
        textTransform: 'none',
        transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
        minWidth: '10px',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 99,
        display: 'none',
        opacity: 0,
        '&.visible': {
            display: 'block',
            opacity: 1,
        },
        '&.MuiButton-contained': {
            backgroundColor: '#41ae2a',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#3b9f26',
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
    }
}
