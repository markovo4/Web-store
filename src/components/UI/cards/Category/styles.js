export const styles = {
    li: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: {
            lg: 'center',
            md: 'center',
            xs: 'flex-start',
        },
        '&:not(:last-of-type)': {
            borderBottom: {
                lg: 'unset',
                md: 'unset',
                xs: '1px solid #0003',
            },
            borderRight: {
                lg: '1px solid #0003',
                md: '1px solid #0003',
                xs: 'unset',
            }
        }
    }
}