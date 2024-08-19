import {data} from './data.js';
import Slider from "react-slick";
import {Box, List, ListItem} from "@mui/material";
import {Link} from "react-router-dom";
import {styles} from "./styles.js";
import {Image} from "antd";
import stylesSCSS from "./stylesSCSS.module.scss";

const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        autoplay: true,
    };

    return (
        <Box sx={styles.carouselContainer}>
            <Box sx={styles.container}>
                <Slider {...settings}>
                    {data.map((banner, index) => (
                        <Box key={index} sx={styles.slide}>
                            <Link to={banner.link || '#'}>
                                <Image src={banner.img} alt={banner.title} style={styles.image}
                                       className={stylesSCSS.image}/>
                            </Link>
                        </Box>
                    ))}
                </Slider>
            </Box>

            <Box sx={styles.containerMd}>
                <List sx={styles.slideList}>
                    {data.map((banner, index) => (
                        <ListItem key={index} sx={styles.slideItem}>
                            <Link to={banner.link || '#'}>
                                <Image src={banner.img} alt={banner.title} className={stylesSCSS.image}/>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default Carousel;
