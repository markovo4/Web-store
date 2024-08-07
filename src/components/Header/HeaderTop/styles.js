export const styles = {
    header: {
        height: '75px'
    },
    container: {
        display: 'flex',
        width: '1400px',
        height: 'inherit',
        margin: '0 auto',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        width: '340px'
    },
    button: {
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
            backgroundColor: '#42af2a',
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
    selector: {
        width: '200px',
        '& .MuiInputBase-root': {
            height: '30px',
            backgroundColor: '#fff',
            borderColor: '#fff',
            width: '200px'
        },
        '& .MuiOutlinedInput-input': {
            height: '30px',
            padding: '0 14px',
            boxSizing: 'border-box',
            width: '200px'
        },
        '& .MuiInputLabel-root': {
            top: '-12px',
            left: '14px',
            transform: 'translate(0, 16px) scale(1)',
            width: '200px'
        },
        '& .MuiInputLabel-shrink': {
            transform: 'translate(0, 0px) scale(0.75)',
            color: '#40ab29',
            width: '200px'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root': {
            transform: 'translate(0, 0px) scale(0.75)',
            width: '200px'
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#c2c2c2', // Set border color to white on hover
            width: '200px'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#40ab29', // Set border color to white on focus
            width: '200px'
        }
    },
    buttonLogOut: {
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
            backgroundColor: '#fd661f',
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
    }
}