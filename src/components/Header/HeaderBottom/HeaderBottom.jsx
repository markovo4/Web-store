import {styles} from "./styles";
import {Button, Container} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductsSelect from "../../UI/inputs/ProductsSelect";
import {Link} from "react-router-dom";
import routerNames from "../../../router/routes/routerNames.js";

const HeaderBottom = () => {
    return (
        <section style={styles.header}>
            <Container sx={styles.container}>
                <div style={styles.wrapper}>
                    <ProductsSelect
                        styles={styles.selector}/>
                </div>
                <div style={styles.wrapper}>
                    <Link to={routerNames.pageFavProducts}>
                        <Button sx={styles.button} variant="contained"><FavoriteBorderIcon/></Button></Link>
                    <div className="w-[1px] h-9" style={styles.separator}/>
                    <Link to={routerNames.pageCart}><Button sx={styles.button}
                                                            variant="contained"><ShoppingCartIcon/></Button></Link>

                </div>
            </Container>
        </section>

    )
}

export default HeaderBottom;