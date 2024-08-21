export const styles = {
    formTitle: {
        color: 'rgba(69,69,69,0.86)',
        fontSize: '20px',
        marginBottom: '10px'
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
    summaryForm: {
        padding: '40px',
        border: 'unset',
        display: 'flex',
        alignItems: 'center',
        width: {
            lg: '800px',
            md: '100%',
            xs: '100%',
        },
        height: 'auto',
        justifyContent: 'space-between',
        borderRadius: '8px',
        marginBottom: '20px',
        backgroundColor: '#e3e3e3',
        '& .MuiTypography-subtitle1': {
            fontSize: '18px',
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
    },
    imgContainer: {
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        gap: '10px',
        borderRadius: '8px',
    },
    img: {
        height: '90px',
        width: '90px',
        borderRadius: '8px',
        objectFit: 'contain',
        objectPosition: 'center',
        padding: '10px',
        backgroundColor: 'white',
    },
    contactInfoTitle: {
        color: 'rgba(0,0,0,0.58)',
        fontSize: '14px'
    }
}