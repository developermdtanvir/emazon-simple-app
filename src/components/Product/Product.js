import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css';
const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4>{name}</h4>
                <br />
                <p><small>by:</small>   {seller}</p>
                <br />
                <p><strong>$</strong>{price}</p>
                <br />
                <p>Only  {stock} left in stock-order soon </p>
                <button onClick={()=> props.handleAddProduct(props.product)} className='main-btn'><FontAwesomeIcon icon={faCartShopping} /> add to cart </button>
            </div>

        </div>
    )
}
export default Product;