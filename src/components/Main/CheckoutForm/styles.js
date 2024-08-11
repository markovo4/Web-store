export const styles = {
    sectionForm: {
        backgroundColor: '#eeeeee',
        minHeight: '850px',
        maxHeight: '100%'
    },
    wrapper: {
        display: 'flex',
        gap: '50px'
    },
    buttonBack: {
        '&.MuiButton-root': {
            padding: '5px 5px',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },

        '&.MuiButton-outlined': {
            backgroundColor: 'transparent',
            color: 'rgb(66,175,42)',
            border: 'unset',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: 'transparent',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'transparent',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
    checkoutTitle: {
        fontWeight: 'bold',
        color: '#606060'
    },
    selector: {
        '& .MuiInputBase-root': {
            height: '30px',
            backgroundColor: '#fff',
            borderColor: '#fff',
            width: '700px',
        },
        '& .MuiOutlinedInput-input': {
            height: '30px',
            padding: '0 14px',
            boxSizing: 'border-box',
        },
        '& .MuiInputLabel-root': {
            top: '-12px',
            left: '14px',
            width: '700px',
            transform: 'translate(0, 16px) scale(1)',

        },
        '& .MuiInputLabel-shrink': {
            transform: 'translate(0, 0px) scale(0.75)',
            color: '#40ab29'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root': {
            transform: 'translate(0, 0px) scale(0.75)',
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#c2c2c2', // Set border color to white on hover
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#40ab29', // Set border color to white on focus
        },
    },
    selectorContainer: {
        height: '100px',
        width: '800px',
        backgroundColor: 'white',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '10px 50px 30px 50px',
        gap: '10px',
        marginBottom: '20px'
    },
    selectorTitle: {
        fontSize: '15px',
        color: '#606060'
    },
    checkoutList: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px'
    },
    titleList: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        width: '800px',
        backgroundColor: 'white',
        padding: '40px',
        gap: '20px',
        borderRadius: '8px'
    },
    buttonSubmit: {
        '&.MuiButton-root': {
            padding: '5px 5px',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '250px',
            maxHeight: '40px',
        },
        // Styles for contained buttons
        '&.MuiButton-outlined': {
            backgroundColor: 'rgb(253,102,31)',
            padding: '5px 20px',
            color: 'white',
            border: '1px solid rgb(253,102,31)',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: 'rgb(253,102,31)',
                color: 'white'
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'transparent',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
    sidebar: {
        backgroundColor: 'white',
        width: '300px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        padding: '28px',
        position: 'sticky',
        top: '20px'
    },
    summary: {
        marginBottom: '20px',
    },
    itemsPrice: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgb(110,110,110, 0.5)',
        paddingBottom: '10px',
        marginBottom: '40px'
    },
    totalPriceSub: {
        fontWeight: 'bold',
        fontSize: '18px',
        color: 'rgba(0,0,0,0.8)',
    },
    itemsCount: {
        color: 'rgb(110,110,110)',
    },
    totalPriceMain: {
        fontWeight: 'bold',
        fontSize: '25px',
        color: 'rgb(52,52,52)'
    },
    checkoutButton: {
        '&.MuiButton-root': {
            padding: '5px 5px',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '250px',
            maxHeight: '40px',
        },
        // Styles for contained buttons
        '&.MuiButton-contained': {
            backgroundColor: 'rgb(65,174,42)',
            padding: '5px 20px',
            color: 'white',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: 'rgb(253,102,31)',
                color: 'white'
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'transparent',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
    checkBoxGiftCard: {
        padding: '40px',
        border: 'unset',
        display: 'flex',
        flexDirection: 'column',
        width: '800px',
        height: 'auto',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        backgroundColor: '#ffffff',
    },
    inputGiftCardContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: '60px',

    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f6f5f5',
        width: '700px',
        border: '1px solid rgba(0,0,0,0.1)',
        borderRadius: '8px',
        padding: '20px',
    },
    giftCardInfoSubtitle: {},
    giftCardInfoTitle: {
        marginBottom: '10px'
    },
    commentButton: {
        color: 'rgba(0,0,0,0.55)',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&:disabled': {
            color: 'grey.500',
        },
        border: 'unset',
        borderColor: 'transparent',
        borderRadius: '50%',
        padding: '0',
        boxShadow: 0,
        transition: 'none',
    },
    commentIcon: {
        fontSize: '15px'
    },
    commentTitle: {
        fontSize: '14px',
        color: 'rgba(0,0,0,0.72)'
    },
    textArea: {
        width: '700px', // Full width of the container
        height: '100px',
        padding: '10px', // Padding for internal spacing
        borderRadius: '4px', // Rounded corners for a smoother look
        border: '1px solid #ccc', // Light gray border
        resize: 'none', // Allows vertical resizing
        fontSize: '16px', // Standard font size for readability
        color: '#333', // Dark text color
        outline: 'none', // Remove default browser outline
        '&:hover': {
            borderColor: '#888', // Darker border on hover for feedback
        },
        '&:focus': {
            borderColor: '#42af2a', // Antd primary color for focus state
            boxShadow: '0 0 0 3px #42af2a', // Soft shadow for focus
        },
        '&:disabled': {
            backgroundColor: '#f5f5f5', // Light gray background for disabled state
            color: '#a0a0a0', // Gray text color for disabled state
        },
        '&::placeholder': {
            color: '#aaa', // Light gray placeholder text
            opacity: 1, // Ensure visibility of placeholder
        },
        '&.error': {
            borderColor: '#f5222d', // Bright red for error state
        },
    },
}