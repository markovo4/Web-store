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
        gap: '20px'
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
        '& .MuiInputBase-root': {
            height: '30px',
            backgroundColor: '#fff',
            borderColor: '#fff'
        },
        '& .MuiOutlinedInput-input': {
            height: '30px',
            padding: '0 14px',
            boxSizing: 'border-box',
        },
        '& .MuiInputLabel-root': {
            top: '-12px',
            left: '14px',
            transform: 'translate(0, 16px) scale(1)',
        },
        '& .MuiInputLabel-shrink': {
            transform: 'translate(0, 0px) scale(0.75)',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root': {
            transform: 'translate(0, 0px) scale(0.75)',
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#c2c2c2', // Set border color to white on hover
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#40ab29', // Set border color to white on focus
        }
    }
}