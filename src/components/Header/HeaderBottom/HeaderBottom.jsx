import {styles} from "./styles";
import {Button, Container} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductsSelect from "../../UI/inputs/ProductsSelect";
import {Link} from "react-router-dom";
import routerNames from "../../../router/routes/routerNames.js";

const HeaderBottom = () => {
    // const navigate = useNavigate();
    return (
        <section style={styles.header}>
            <Container sx={styles.container}>
                <div style={styles.wrapper}>
                    <ProductsSelect
                        styles={styles.selector}/>
                </div>
                <div style={styles.wrapper}>
                    <Button sx={styles.button} variant="contained"><FavoriteBorderIcon/></Button>
                    <div className="w-[1px] h-11 bg-gray-500"/>
                    <Link to={routerNames.pageCart}><Button sx={styles.button}
                                                            variant="contained"><ShoppingCartIcon/></Button></Link>

                </div>
            </Container>
        </section>

    )
}

export default HeaderBottom;