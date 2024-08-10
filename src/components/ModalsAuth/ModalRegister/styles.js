export const styles = {
    formRegister: {
        backgroundColor: 'white',
        borderRadius: '4px',
        padding: '20px 25px'
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
};
