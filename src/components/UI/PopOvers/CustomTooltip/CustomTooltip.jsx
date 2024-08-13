import {styled} from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import {tooltipClasses} from "@mui/material";

const CustomTooltip = styled(({className, children, title}) => (
    <Tooltip title={title} arrow classes={{popper: className}}>
        {children}
    </Tooltip>
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#f00", // Set the tooltip background color to red
        color: "#fff", // Set the text color to white for contrast
        fontSize: "0.875rem", // Font size for the tooltip text
        padding: "8px 12px", // Padding for better spacing
        borderRadius: "4px", // Optional: rounded corners
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: "#f00", // Set the arrow color to match the tooltip background
    },
}));

export default CustomTooltip;