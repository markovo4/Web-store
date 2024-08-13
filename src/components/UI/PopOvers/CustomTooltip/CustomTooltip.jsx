import {styled} from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import {tooltipClasses} from "@mui/material";

const CustomTooltip = styled(({className, children, title}) => (
    <Tooltip title={title} arrow classes={{popper: className}}>
        {children}
    </Tooltip>
))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#ffffff",
        color: "#000",
        fontSize: "1rem",
        width: '280px',
        padding: "8px 12px",
        borderRadius: "4px",
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: "#ffffff",
    },
}));

export default CustomTooltip;