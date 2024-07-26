import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Category = ({children}) => {
    return (
        <li className='flex flex-col items-center border-r-2 pr-20 last:border-r-0 last:pr-0'>
            <Link to={`${children[1].charAt(0).toLowerCase() + children[1].slice(1)}`}
                  className="flex place-items-center align-middle">
                {children}
            </Link>
        </li>
    );
};

Category.propTypes = {
    children: PropTypes.any
};

export default Category;
