export const styles = {
    sectionForm: {
        backgroundColor: '#eeeeee',
        minHeight: '850px',
        maxHeight: '100%'
    },
    wrapper: {
        display: 'flex',
        flexDirection: {
            lg: 'row',
            md: 'column',
            xs: 'column'
        },
        gap: {
            lg: '50px',
            md: '0',
            xs: '0'
        }
    },
    buttonBack: {
        '&.MuiButton-root': {
            padding: '5px 5px',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '14px',
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
        fontSize: {
            lg: '25px',
            md: '25px',
            xs: '18px',
        },
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
        padding: {
            lg: '40px',
            md: '40px',
            xs: '16px',
        },
        borderRadius: '8px',
    },
    orderTitle: {
        fontSize: {
            lg: '20px',
            md: '18px',
            xs: '16px'
        },
        color: {
            lg: '#0009',
            md: '#0009',
            xs: '#0009'
        }
    },
    titleList: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        width: {
            lg: '800px',
            md: '100%',
            xs: '100%',
        },
        backgroundColor: 'white',
        padding: {
            lg: '40px',
            md: '40px',
            xs: '16px',
        },
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
            minWidth: {
                lg: '250px',
                md: '250px',
                xs: '200px'
            },
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
        width: {
            lg: '300px',
            md: '100%'
        },
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        padding: '28px',
        marginBottom: '100px',
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
            minWidth: {
                lg: '250px',
                md: '250px',
                xs: '200px',
            },
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
        width: {
            lg: '800px',
            md: '100%',
            xs: '100%'
        },
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
        flexWrap: {
            lg: 'nowrap',
            md: 'nowrap',
            xs: 'wrap',
        },
        gap: {
            lg: '60px',
            md: '60px',
            xs: '10px',
        },
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f6f5f5',
        width: {
            lg: '700px',
            md: '100%',
            xs: '100%'
        },
        border: '1px solid rgba(0,0,0,0.1)',
        borderRadius: '8px',
        padding: '20px',
    },
    giftCardInfoTitle: {
        marginBottom: '10px',
        fontSize: {
            lg: '20px',
            md: '20px',
            xs: '14px',
        }
    },

    giftCardInfoSubtitle: {
        fontSize: {
            lg: '16px',
            md: '16px',
            xs: '12px',
        }
    },
    warning: {
        fontSize: {
            lg: '16px',
            md: '16px',
            xs: '12px',
        }
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

    totalPriceOriginalMain: {
        fontWeight: 'bold',
        fontSize: '25px',
        color: 'rgb(52,52,52)',
        height: '30px'
    },
    formContainer: {
        display: 'grid',
        gridTemplateColumns: {
            lg: '1fr 1fr',
            md: '1fr 1fr',
            xs: '1fr'
        },
        gap: '20px'
    },
    email: {
        maxWidth: {
            lg: '300px',
            md: '49%',
        },
        gap: '20px'
    }
}