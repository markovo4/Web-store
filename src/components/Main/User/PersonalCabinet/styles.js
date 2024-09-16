export const styles = {
    section: {
        backgroundColor: '#ececec',
        width: '100%'
    },
    wrapper: {
        width: '25%',
        backgroundColor: '#ffffff',
    },
    optionsList: {
        width: '100%'
    },
    optionsListItem: {
        transition: '0.2s ease-out',
        padding: '20px',
        '&:not(:last-of-type)': {
            borderBottom: '1px solid #0002',
        },
        '&:hover': {
            backgroundColor: '#41ae2a',
            transition: '0.2s ease-out',
            color: 'white',
            borderRight: '20px solid #e76a20',
            padding: '20px',
            paddingRight: '0'
        }
    },
    optionActive: {
        backgroundColor: '#41ae2a',
        transition: '0.2s ease-out',
        color: 'white',
        borderRight: '20px solid #e76a20',
        padding: '20px',
        paddingRight: '0',
        '&:not(:last-of-type)': {
            borderBottom: '1px solid #0002',
        },
    },
    option: {
        fontSize: '18px',
    }
}