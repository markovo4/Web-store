export const styles = {
    title: {
        margin: '10px',
        padding: '20px',
        fontSize: '30px',
        color: 'rgba(0, 0, 0, 0.79)',
    },
    sectionViewed: {
        backgroundColor: {
            lg: '#eeeeee',
            md: '#fff',
            xs: '#fff'
        },
        height: '550px',
        display: 'flex',
        width: '100%',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#ffffff',
        padding: '10px',
        marginLeft: '5px'
    },
    slideList: {
        display: {
            lg: 'none',
            md: 'flex',
            xs: 'flex',
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
        width: '400px',
        padding: '0'
    },

    list: {
        display: {
            lg: 'flex',
            md: 'none',
            xs: 'none'
        }
    }
};
