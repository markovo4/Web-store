import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {ListItem} from "@mui/material";
import {styles} from "./styles.js";

const Category = ({children}) => {
    return (
        <ListItem sx={styles.li}>
            <Link to={`/categories/${children[1].charAt(0).toLowerCase() + children[1].slice(1)}`}
                  className="flex place-items-center align-middle">
                {children}
            </Link>
        </ListItem>
    );
};

Category.propTypes = {
    children: PropTypes.any
};

export default Category;
