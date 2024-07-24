import {data} from './data.js';
import BannerHero from './Banner-Hero.jpeg'; // Correctly import the image
import Slider from "react-slick";
import './Carousel.css'; // Import the CSS file

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <section style={{backgroundColor: 'rgba(0,0,0,0.06)', height: '600px', display: 'flex', alignItems: 'center'}}>
            <div style={{
                width: '1200px',
                margin: '0 auto',
                padding: '0 24px',

            }}>
                <Slider {...settings}>
                    {data.map((banner, index) => (
                        <div key={index} style={'slick-slide-custom'}>
                            <div>
                                <a href={'#'}>
                                    <img src={BannerHero} alt={banner.title} className='banner-image'/>
                                </a>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Carousel;
