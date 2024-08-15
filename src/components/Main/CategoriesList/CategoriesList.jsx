import {Container} from "@mui/material";
import {useGetAllCategoriesQuery} from "../../../redux/productsApi/productsApi";
import Category from "../../UI/cards/Category";
import CableIcon from '@mui/icons-material/Cable';
import DiamondIcon from '@mui/icons-material/Diamond';
import Man3Icon from '@mui/icons-material/Man3';
import WomanIcon from '@mui/icons-material/Woman';
import {styles} from "./styles.js";


const icons = [
    <CableIcon key="cable" color="success" sx={styles.iconStyles}/>,
    <DiamondIcon key="diamond" color="success" sx={styles.iconStyles}/>,
    <Man3Icon key="man" color="success" sx={styles.iconStyles}/>,
    <WomanIcon key="woman" color="success" sx={styles.iconStyles}/>
];

const CategoriesList = () => {
    const {data: categories} = useGetAllCategoriesQuery();

    return (
        <section style={styles.section}>
            <Container sx={styles.container}>
                <ul className='flex place-items-center justify-evenly space-x-4 h-[60px]'>
                    {categories && categories.map((category, index) => (
                        <Category key={index}>
                            {icons[index % icons.length]}
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Category>
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default CategoriesList;
