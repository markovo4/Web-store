export const styles = {
    sectionForm: {
        backgroundColor: '#eeeeee',
    },
    wrapper: {},
    buttonBack: {
        '&.MuiButton-root': {
            padding: '5px 5px',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px', // Ensure buttons have a minimum width
        },
        // Styles for contained buttons
        '&.MuiButton-outlined': {
            backgroundColor: 'transparent',
            color: 'rgb(66,175,42)',
            border: 'unset',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: 'transparent',
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
    checkoutTitle: {
        fontWeight: 'bold',
        color: '#606060'
    }
}