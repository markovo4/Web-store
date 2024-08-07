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
    menuItem: {
        width: '250px',
        padding: '10px 20px',
        '&:hover': {
            backgroundColor: '#f1f1f1',
        },
    },
    menuTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    }
};