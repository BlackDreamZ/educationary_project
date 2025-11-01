import ItemProduct from "./itemProduct";
import './style.css';

const ProductsBlock = (props) => {
    return (
        <div className="productsBlock">
            {props.products.map((product, index) => {
                return (
                    <ItemProduct key={index} product={product} />
                )
            })}
        </div>
    )
}

export default ProductsBlock;