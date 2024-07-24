import Category from "../../UI/cards/Category";
import {useGetAllCategoriesQuery} from "../../../redux/productsApi/productsApi.js";
import {Container} from "@mui/material";
import CableIcon from '@mui/icons-material/Cable';
import DiamondIcon from '@mui/icons-material/Diamond';
import Man3Icon from '@mui/icons-material/Man3';
import WomanIcon from '@mui/icons-material/Woman';

const styleIcons = {
    width: '65px',
    height: '65px'
};

const CategoriesList = () => {
    const {data: categories} = useGetAllCategoriesQuery();
    const icons = [
        <CableIcon color={'success'} sx={styleIcons}/>,
        <DiamondIcon color={'success'} sx={styleIcons}/>,
        <Man3Icon color={'success'} sx={styleIcons}/>,
        <WomanIcon color={'success'} sx={styleIcons}/>
    ];

    return (
        <section style={{backgroundColor: 'rgba(0,0,0,0.06)', paddingBottom: '40px'}}>
            <Container sx={{backgroundColor: 'white', borderRadius: '10px'}}>
                <ul className='flex place-items-center justify-between space-x-4 h-[80px] '>
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
