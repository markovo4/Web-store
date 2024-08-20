export const styles = {
    li: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    list: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        padding: 0,
        margin: 0,
        listStyle: 'none',
    },
    container: {
        display: {
            lg: 'none'
        },
        position: 'fixed',
        bottom: '0',
        width: '100%',
        backgroundColor: '#fff',
        borderTop: '1px solid #0002',
        zIndex: 10,
    },
    cartNotify: {
        width: '10px',
        height: '10px',
        backgroundColor: '#fd661f',
        borderRadius: '50%',
        position: 'absolute',
        top: 0,
        right: 0
    },

    cartNotifyNot: {
        display: 'none'
    },
    cart: {
        position: 'relative'
    },
    listCategories: {
        position: 'fixed',
        top: 'auto',
        bottom: '62px',
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        height: '50vh',
        overflowY: 'auto',
        zIndex: 20,
        boxShadow: '0px -10px 20px rgba(0, 0, 0, 0.2)',
    },
    category: {
        padding: '20px 16px',
        borderBottom: '1px solid #0002',
        backgroundColor: '#fff',
    },
    listCategoriesNone: {
        display: 'none'
    }
}
