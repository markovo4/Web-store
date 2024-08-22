export const styles = {
    title: {
        margin: '0 0 20px 0',
        fontWeight: 'bold',
        fontSize: '30px',
        color: 'rgba(0,0,0,0.88)'
    },
    section: {
        backgroundColor: '#eeeeee',
        height: '700px',
        display: 'flex',
        alignItems: 'center'
    },
    container: {
        display: {
            lg: 'flex',
            md: 'none',
            xs: 'none'
        }
    },
    progressBar: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px'
    },
    slideList: {
        display: {
            lg: 'none',
            md: 'flex',
            xs: 'flex'
        },
        flexDirection: 'row',
        width: {
            lg: '98vw',
            md: '92vw',
            xs: '92vw',

        },
        overflowX: 'auto',
        overflowY: 'hidden',
        WebkitOverflowScrolling: 'touch',
        padding: 0,
        margin: 0,
        listStyle: 'none',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    slideItem: {
        flexShrink: 0,
        width: {
            md: '400px',
            xs: '320px'
        },
        padding: '0'
    },
}