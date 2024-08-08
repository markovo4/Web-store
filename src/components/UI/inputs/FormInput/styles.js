export const styles = {
    formInput: {
        '&.MuiInput-root': {
            backgroundColor: 'rgba(0,0,0,0.04)',
            borderRadius: '4px 4px 0 0',
            height: '30px'
        },
        '&.Mui-focused': {
            borderColor: 'black',
        },
        '&.Mui-disabled': {
            backgroundColor: 'lightgrey', // Background color when disabled
        },
        '&.Mui-error': {
            borderColor: 'red', // Border color when in error state
        },
        '&.MuiInput-multiline': {
            padding: '10px', // Padding for multiline inputs
        },
        '& .MuiInput-input': {
            padding: '10px', // Padding for the input element
        },
        '& .MuiInput-inputTypeSearch': {
            borderRadius: '4px', // Border radius for search inputs
        },
    },
    inputLabel: {
        '&.MuiInputLabel-root': {
            color: 'black',
            paddingTop: '5px',
        },
        '&.Mui-focused': {
            color: 'black',
            fontSize: '22px',
        },
        '&.Mui-disabled': {
            color: 'grey',
        },
        '&.Mui-error': {
            color: 'red',
        },
        '&.Mui-required': {
            color: 'red',
        },
        '& .MuiInputLabel-asterisk': {
            color: 'red',
        },
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
            minWidth: '64px', // Ensure buttons have a minimum width
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
    errorText: {
        color: 'red',
        fontSize: 'small',
        margin: '0 0 0 5px'
    }
}