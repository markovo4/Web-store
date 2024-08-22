export const styles = {
    formLogin: {
        backgroundColor: 'white',
        borderRadius: '4px',
        padding: '20px 25px'
    },
    loginButton: {
        // Base styles for all button variants
        '&.MuiButton-root': {
            padding: '2px 16px',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px', // Ensure buttons have a minimum width
        },
        // Styles for contained buttons
        '&.MuiButton-contained': {
            backgroundColor: 'rgba(255,83,0,0.46)',
            color: '#fff',
            marginBottom: '20px',
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
        },
        '&.MuiButton-outlined': {
            backgroundColor: 'transparent',
            color: '#000',
            fontSize: '14px',
            border: 'unset',
            '&:hover': {
                color: '#40ad2a'
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'transparent',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },

}