export const styles = {
    carouselContainer: {
        backgroundColor: 'rgba(0,0,0,0.06)',
        height: '550px',
        display: 'flex',
        alignItems: 'center',
    },
    container: {
        visibility: {
            md: 'hidden',
            lg: 'visible',
        },
        opacity: {
            md: 0,
            lg: 1,
        },
        position: {
            md: 'absolute',
            lg: 'unset',
        },
        width: '100%',
        maxWidth: {
            md: '800px',
            lg: '1200px'
        },
        margin: '0 auto',
        padding: '0 24px',
        transition: 'visibility 0s, opacity 0.5s linear',
    },
    slide: {
        margin: '0 -10px',
        padding: '0 12px',
    },
    containerMd: {
        display: {
            md: 'flex',
            lg: 'none',
        },
        width: '100%', // Ensure it doesn't exceed the max-width
        maxWidth: '900px', // Limit the container to 900px
        margin: '0 auto',
        padding: '0 24px',
    },
    slideList: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        overflowX: 'auto',
        overflowY: 'hidden',
        WebkitOverflowScrolling: 'touch',
        padding: 0,
        margin: 0,
        listStyle: 'none',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    slideItem: {
        flexShrink: 0,
        width: '290px',
    },
    image: {
        width: '248px',
        height: 'auto',
    },
};
