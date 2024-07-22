import {Link} from "react-router-dom";

const NavTest = () => {
    return (
        <nav>
            <Link to={'/'}>Main Page</Link>
            <Link to={'*'}>NotFound Page</Link>
            <Link to={'cart'}>Cart Page</Link>
            <Link to={`products/${1}`}>Product Page</Link>
            <Link to={`order`}>Order Page</Link>
        </nav>
    )
}

export default NavTest;