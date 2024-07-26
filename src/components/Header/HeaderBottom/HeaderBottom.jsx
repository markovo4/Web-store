import {styles} from "./styles";
import {Button, Container} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductsSelect from "../../UI/inputs/ProductsSelect";
import {Link} from "react-router-dom";

const HeaderBottom = () => {
    return (
        <section style={styles.header}>
            <Container sx={styles.container}>
                <div style={styles.wrapper}>
                    <ProductsSelect
                        styles={styles.selector}/>
                </div>
                <div style={styles.wrapper}>
                    <Button sx={styles.button} variant="contained"><FavoriteBorderIcon/></Button>
                    <Link to={'cart'}><Button sx={styles.button} variant="contained"><ShoppingCartIcon/></Button></Link>

                </div>
            </Container>
        </section>

    )
}

export default HeaderBottom;