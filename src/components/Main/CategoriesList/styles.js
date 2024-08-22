export const styles = {
    section: {
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
        paddingBottom: '40px',
    },
    container: {
        padding: '24px',
    },
    iconStyles: {
        width: '40px',
        height: '40px',
    },
    list: {
        display: 'flex',

        gap: {
            lg: '0',
            md: '0',
            xs: '20px',
        },
        flexDirection: {
            lg: 'row',
            md: 'row',
            xs: 'column',
        },
        alignItems: {
            lg: 'center',
            md: 'center',
        },
        justifyContent: {
            lg: 'space-evenly',
            md: 'space-evenly',
        },
        height: {
            lg: '60px',
            md: '60px',
            xs: 'auto', // Ensure height auto-adjusts on small screens
        },
        backgroundColor: '#fff', // Changed 'white' to hex for consistency
        borderRadius: '10px',

    },
};
