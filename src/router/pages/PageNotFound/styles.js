export const styles = {
    notFound: {
        textAlign: 'center',
        color: 'rgba(0,0,0,0.81)'
    },
    section: {
        minHeight: '100vh',
        maxHeight: '100%'
    },
    button: {
        '&.MuiButton-root': {
            padding: '2px 16px',
            height: '45px',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '20px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '200px',
        },
        // Styles for contained buttons
        '&.MuiButton-contained': {
            backgroundColor: '#42AF2AFF',
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
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        justifyContent: 'center',
        margin: '15% 0'
    }
}