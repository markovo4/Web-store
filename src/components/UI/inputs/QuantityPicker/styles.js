export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        width: '40px',
        borderRadius: '0px',
    },
    buttonMinus: {
        // Base styles for all button variants
        '&.MuiButton-root': {
            padding: '2px 2px',
            borderRadius: '4px 0 0 4px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '30px', // Ensure buttons have a minimum width
        },
        // Styles for contained buttons
        '&.MuiButton-contained': {
            backgroundColor: 'rgba(0,0,0,0.18)',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#3aa127',
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
    buttonPlus: {
        // Base styles for all button variants
        '&.MuiButton-root': {
            padding: '2px 2px',
            borderRadius: '0 4px 4px 0',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '30px', // Ensure buttons have a minimum width
        },
        // Styles for contained buttons
        '&.MuiButton-contained': {
            backgroundColor: 'rgba(0,0,0,0.18)',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#3aa127',
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
};
