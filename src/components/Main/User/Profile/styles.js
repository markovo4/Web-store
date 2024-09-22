export const styles = {
    wrapper: {
        backgroundColor: 'white',
        width: '895px',
        height: '100vh',
        paddingTop: '50px'
    },
    infoGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px',
        borderBottom: '1px solid #0002'
    },
    infoText: {
        color: 'rgba(0,0,0,0.62)'
    },
    signUpButton: {
        // Base styles for all button variants
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
        // Styles for contained buttons
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
    }
}