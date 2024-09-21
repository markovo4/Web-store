export const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    section: {
        display: 'flex',
        minHeight: '100vh',
        maxHeight: '100%',
        backgroundColor: '#ececec',
        width: '100%'
    },
    wrapper: {
        width: '21.7%',
        backgroundColor: '#ffffff',
    },
    optionsList: {
        width: '100%',
        height: '100vh',
    },
    optionsListItem: {
        transition: '0.2s ease-out',
        padding: '10px',
        color: 'rgba(0,0,0,0.69)',
        '&:not(:last-of-type)': {
            borderBottom: '1px solid #0002',
        },
        '&:hover': {
            backgroundColor: '#41ae2a',
            transition: '0.2s ease-out',
            color: 'white',
            borderRight: '20px solid #e76a20',
            padding: '10px',
            paddingRight: '0'
        }
    },
    optionActive: {
        backgroundColor: '#41ae2a',
        transition: '0.2s ease-out',
        color: 'white',
        borderRight: '20px solid #e76a20',
        padding: '10px',
        paddingRight: '0',
        '&:not(:last-of-type)': {
            borderBottom: '1px solid #0002',
        },
    },

    optionsListItemLast: {
        transition: '0.2s ease-out',
        padding: '10px',
        '&:not(:last-of-type)': {
            borderBottom: '1px solid #0002',
        },
        '&:hover': {
            backgroundColor: '#e56920',
            transition: '0.2s ease-out',
            color: 'white',
            borderRight: '20px solid #cc0303 ',
            padding: '15px',
            paddingRight: '0'
        }
    },
    option: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        fontSize: '18px',


    }
}