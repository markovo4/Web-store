export const styles = {
    button: {
        '&.MuiButton-root': {
            padding: '5px 5px',
            borderRadius: '0 8px 8px 0 ',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '50px',
            maxWidth: '700px',
            maxHeight: '40px',
        },
        // Styles for contained buttons
        '&.MuiButton-contained': {
            backgroundColor: 'rgb(65,174,42)',
            padding: '5px 20px',
            color: 'white',
            border: 'unset',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: 'rgb(253,102,31)',
                color: 'white'
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
    textField: {
        '& .MuiInputBase-root': {
            borderRadius: '8px 0 0 8px',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRadius: '8px 0 0 8px',
            },
            '&:hover fieldset': {
                borderColor: 'rgb(194,194,194)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(194,194,194)',
            },
        },
        '& .MuiInputBase-input': {
            padding: '7px 12px',
        },
        '& .MuiFormLabel-root': {
            '&.Mui-focused': {
                color: 'rgba(0,0,0,0)',
            },
        },
    },
};