import Product from "../../UI/cards/Product";
import {useLocation} from "react-router-dom";
import {useState} from "react";
import {useGetProductByIdQuery} from "../../../redux/productsApi/productsApi.js";

const ProductSingleItem = () => {
    const location = useLocation();
    const pathComponents = location.pathname.split('/');
    const [productId, setProductId] = useState(pathComponents.at(-1))
    const product = useGetProductByIdQuery(productId);

    return (
        <section style={{
            backgroundColor: '#eeeeee',
            height: '890px',
            display: 'flex',
            alignItems: "center"
        }}>
            {
                product.data && <Product
                    id={product.data.id}
                    title={product.data.title}
                    description={product.data.description}
                    image={product.data.image}
                    price={product.data.price}
                    rating={product.data.rating.rate}
                    count={product.data.rating.count}
                />
            }
        </section>
    )
}

export default ProductSingleItem;