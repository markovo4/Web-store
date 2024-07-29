import {Box, Button, Typography} from "@mui/material";
import {styles} from "./styles.js";

const FormCard = ({
                      formTitle,
                      formTitleStyles = styles.formTitle,
                      formSubtitle,
                      formSubtitleStyles = styles.formSubtitle,
                      children
                  }) => {
    return (
        <Box sx={styles.summaryForm}>
            <div>
                <Typography sx={formTitleStyles}>
                    {formTitle}
                </Typography>
                <Typography sx={formSubtitleStyles}>
                    {formSubtitle}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque doloremque expedita fugit, nam
                </Typography>
            </div>
            <Button variant={'outlined'} sx={styles.buttonEdit}>Edit</Button>
        </Box>
    )
}

export default FormCard;