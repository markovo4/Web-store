import {styles} from "./styles";
import {Button, Container, Typography} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductsSelect from "../../UI/inputs/ProductsSelect";
import {Link} from "react-router-dom";
import routerNames from "../../../router/routes/routerNames.js";
import Categories from "../../UI/Categories/index.js";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const HeaderBottom = () => {
    return (
        <section style={styles.header}>
            <Container sx={styles.container}>
                <Categories/>
                <div style={styles.wrapper}>
                    <ProductsSelect
                        styles={styles.selector}/>
                </div>
                <div style={styles.wrapperButtonGroup}>
                    <Button sx={styles.buttonLogIn}
                            variant="contained"><LoginOutlinedIcon/>
                        <Typography variant={'h6'}>LogIn</Typography></Button>
                    <div className="w-[1px] h-9" style={styles.separator}/>
                    <Link to={routerNames.pageFavProducts}>
                        <Button sx={styles.buttonFav} variant="contained"><FavoriteBorderIcon/></Button></Link>
                    <Link to={routerNames.pageCart}>
                        <Button sx={styles.buttonCart}
                                variant="contained"><ShoppingCartOutlinedIcon/>
                            <Typography variant={'h6'}>Cart</Typography></Button></Link>

                </div>
            </Container>
        </section>

    )
}

export default HeaderBottom;