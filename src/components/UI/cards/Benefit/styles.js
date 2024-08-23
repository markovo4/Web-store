export const styles = {
    block: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: {
            lg: '300px'
        },
        '&:not(:last-of-type)': {
            borderBottom: {
                md: '1px solid rgba(105,104,104,0.2)',
                xs: '1px solid rgba(105,104,104,0.2)',
                lg: 'unset'
            },
        },

        paddingBottom: {
            md: '30px',
            xs: '30px',
            lg: '0'
        },
        gap: {
            lg: '0',
            md: '20px',
            xs: '20px',
        }

    },
    title: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '22px',
        gap: '10px',
        color: '#2d2d2d'
    },
    body: {
        color: {
            lg: '#696868',
            md: 'rgba(0,0,0,0.75)'
        },
    }
}