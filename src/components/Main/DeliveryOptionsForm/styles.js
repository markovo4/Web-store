export const styles = {
    radioButton: {
        border: '1px solid rgba(0,0,0,0.11)',
        borderRadius: '8px',
        color: 'rgba(0,0,0,0.61)',
    },
    radioGroup: {
        display: 'flex',
        gap: '10px',
        width: '700px',
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        width: '800px',
        backgroundColor: 'white',
        padding: '40px',
        gap: '20px',
        borderRadius: '8px'
    },
    buttonSubmit: {
        '&.MuiButton-root': {
            padding: '5px 5px',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '250px',
            maxWidth: '700px',
            maxHeight: '40px',
        },
        // Styles for contained buttons
        '&.MuiButton-outlined': {
            backgroundColor: 'rgb(253,102,31)',
            padding: '5px 20px',
            color: 'white',
            border: '1px solid rgb(253,102,31)',
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
    selectorTitle: {
        fontSize: '15px',
        color: '#606060'
    },
    selector: {
        '& .MuiInputBase-root': {
            height: '30px',
            marginBottom: '10px',
            backgroundColor: '#fff',
            borderColor: '#fff',
            width: '700px',
        },
        '& .MuiOutlinedInput-input': {
            height: '30px',
            padding: '0',
            boxSizing: 'border-box',
        },
        '& .MuiInputLabel-root': {
            top: '-12px',
            left: '14px',
            transform: 'translate(0, 16px) scale(1)',
        },
        '& .MuiInputLabel-shrink': {
            transform: 'translate(0, 0px) scale(0.75)',
            color: '#40ab29',
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#c2c2c2', // Set border color to white on hover
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#40ab29', // Set border color to white on focus
        },
    },
    selectorError: {
        color: 'red',
        fontSize: 'small',
        margin: '0 0 0 5px'
    }
}