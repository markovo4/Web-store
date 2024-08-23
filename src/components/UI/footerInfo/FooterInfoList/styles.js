export const styles = {
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.72)'
    },
    subtitle: {
        fontSize: '15px',
        color: 'rgba(0,0,0,0.65)',
        '&:hover': {
            textDecoration: 'underline',
            color: 'rgba(0,0,0,0.85)',
        },
        backgroundColor: 'white',
        width: '100%',
        borderBottom: {
            lg: 'none',
            md: 'none',
            xs: '1px solid #0002',
        },
        paddingBottom: {
            lg: '0',
            md: '0',
            xs: '10px',
        }
    },
    li: {
        maxWidth: {
            lg: '200px',
            md: '200px',
            xs: '100%'
        },
        minWidth: '180px',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
    }
}