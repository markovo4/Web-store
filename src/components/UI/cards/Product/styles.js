export const styles = {
    link: {
        textDecoration: 'none',
    },
    card: {
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        width: '290px',
        height: '570px',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: 'none',
        '&:hover': {
            transition: '0.3s',
            backgroundColor: 'rgba(0,0,0,0.03)',
            boxShadow: '0px 1px 10px 1px rgba(0,0,0,0.22)',
            zIndex: 10000
        }
    },
    image: {
        marginTop: '40px',
        width: '200px',
        height: '200px',
        objectFit: 'cover'
    },
    title: {
        marginTop: '8px',
        textAlign: 'left',
        color: '#000'
    },
    body: {
        textAlign: 'center',
        marginTop: '4px'
    },
    price: {
        marginTop: '8px',
        fontSize: '30px',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.77)'
    },
    rating: {
        textAlign: 'left',
        marginTop: '4px'
    },
    count: {
        marginTop: '8px',
        fontSize: '20px',
        color: '#000'
    },
    wrapper: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    groupedText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        '&.MuiButton-root': {
            padding: '13px 15px',
            borderRadius: '10px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '50px',
        },
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
        },
        '&.MuiButton-outlined': {
            backgroundColor: '#ebf6e8',
            color: '#fff',
            border: '0px',
            '&:hover': {
                backgroundColor: '#ebf6e8',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#ebf6e8',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
};
