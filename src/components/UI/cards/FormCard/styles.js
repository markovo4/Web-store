export const styles = {
    formTitle: {
        color: '#6b6b6b'
    },
    formSubtitle: {
        color: '#6b6b6b',
        width: '200px'
    },
    buttonEdit: {
        '&.MuiButton-root': {
            padding: '5px 5px',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '150px',
            maxHeight: '40px',
        },
        // Styles for contained buttons
        '&.MuiButton-outlined': {
            backgroundColor: 'transparent',
            padding: '5px 20px',
            color: 'rgb(66,175,42)',
            border: '1px solid rgb(66,175,42)',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: 'rgb(66,175,42)',
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
    // summaryForm: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     backgroundColor: 'black'
    // },
    summaryForm: {
        padding: '20px',
        border: 'unset',
        display: 'flex',
        alignItems: 'center',
        width: '800px',
        height: '160px',
        justifyContent: 'space-between',
        borderRadius: '8px',
        marginBottom: '20px',
        backgroundColor: '#e3e3e3',
        '& .MuiTypography-subtitle1': {
            fontSize: '18px', // Subtitle within Box
        },
        '@media (max-width: 600px)': {
            padding: '10px', // Media query for responsiveness
        },
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
    buttonContainer: {
        width: '800px',
        backgroundColor: 'white',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '20px',
        borderRadius: '0 0 8px 8px'
    }
}