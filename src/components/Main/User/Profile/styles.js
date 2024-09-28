export const styles = {
    wrapper: {
        backgroundColor: 'white',
        width: '895px',
        height: '100vh',
        paddingTop: '20px',
        borderRadius: '10px 10px 0 0',
    },
    infoGroup: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
        color: '#090',
        transition: '0.3s',
        borderBottom: '1px solid #0001',
        '&:hover': {
            transition: '0.3s',
            borderBottom: '1px solid #090',
        }
    },
    infoEditGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px'
    },
    infoText: {
        fontSize: '25px',
        color: 'rgba(0,0,0,0.62)'
    },
    infoTextTitle: {
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.7)',
        fontSize: '30px'
    },
    signUpButton: {
        '&.MuiButton-root': {
            padding: '2px 16px',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },
        '&.MuiButton-contained': {
            backgroundColor: 'rgba(255,83,0,0.46)',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#fd661f',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#fd661f',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },

    formContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr'
    },
    editButton: {
        '&.MuiButton-root': {
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '20px',
        },
        '&.MuiButton-contained': {
            fontSize: '25px',
            backgroundColor: 'transparent',
            color: '#41ae2a',
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
    }
}