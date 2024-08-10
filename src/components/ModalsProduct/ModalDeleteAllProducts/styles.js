export const styles = {
    buttonDelete: {
        // Base styles for all button variants
        '&.MuiButton-root': {
            padding: '2px 16px',
            height: '40px',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '20px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '100px',
        },
        // Styles for contained buttons
        '&.MuiButton-contained': {
            backgroundColor: '#fd661f',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#e85e1d',
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
    buttonCancel: {
        // Base styles for all button variants
        '&.MuiButton-root': {
            padding: '2px 16px',
            height: '40px',
            borderRadius: '4px',
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '20px',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '100px',
        },
        // Styles for contained buttons
        '&.MuiButton-contained': {
            backgroundColor: '#ffffff',
            color: 'rgba(0,0,0,0.69)',
            border: '1px solid rgba(0,0,0,0.19)',
            '&:hover': {
                backgroundColor: '#e1e1e1',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#e1e1e1',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
}