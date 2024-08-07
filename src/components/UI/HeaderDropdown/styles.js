export const styles = {
    dropdownContainer: {
        display: 'inline-block',
        position: 'relative',
    },
    button: {
        display: 'flex',
        gap: '5px',
        height: '56px',
        width: '250px',
        borderRadius: '0',
        textTransform: 'none',
        fontSize: '16px',
        backgroundColor: '#389825',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#389825',
        },
    },
    arrowIcon: {
        marginLeft: '20px',
    },
    menu: {
        marginTop: '5px',

    },
    menuTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    endIcon: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    },
    startIcon: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        letterSpacing: '2px'
    }
};