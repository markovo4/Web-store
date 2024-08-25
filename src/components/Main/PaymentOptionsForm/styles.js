export const styles = {
    radioButton: {
        border: '1px solid rgba(0,0,0,0.11)',
        borderRadius: '8px',
        color: 'rgba(0,0,0,0.61)',
        padding: '10px'
    },
    radioGroup: {
        display: 'flex',
        gap: '10px',
        width: {
            lg: '700px',
            md: '86vw',
            xs: '100%',
        },
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        width: {
            lg: '800px',
            md: '100%',
            xs: '100%',
        },
        backgroundColor: 'white',
        padding: {
            lg: '40px',
            md: '40px',
            xs: '16px',
        },
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
            width: {
                lg: '700px',
                md: '100%',
                xs: '100%'
            },
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
    radioLabel: {
        fontSize: {
            lg: '20px',
            md: '18px',
            xs: '14px',
        },
    },
}