import commentIcon from '../../assets/icons/itemProduct/commentIcon.png';
import starIcon from '../../assets/icons/itemProduct/starIcon.png';
import './style.css';

function numberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const ItemProduct = (props) => {
    const {
        img = "",
        title = "",
        tagsDiscount = [""],
        rating = 0,
        countOfReview = 0,
        countryOfOrigin = "",
        price = 0,
        oldPrice = ""
    } = props.product;

    return (
        <div className="itemProduct">
            <img className="productImage" src={img} alt={title}>
            </img>
            <div className="productImage-tags">{tagsDiscount.map((tag, index) => {
                return <p className="discountTag" key={index}>{tag}</p>
            })}</div>
            <div className="itemProduct-content">
                <div className="reviewsBlock">
                    <img src={starIcon} alt="star"/>
                    <p className="reviewsBlock-rating">{rating}</p>
                    <img src={commentIcon} alt="comment"/>
                    <p className="reviewsBlock-total">{countOfReview}</p>
                </div>
                <h5 className="itemProduct-title">{title}</h5>
                <h5 className="itemProduct-countryOrigin">{countryOfOrigin}</h5>
                <div className="buyProduct">
                    <div className="buyItem">
                        <h3 className="buyItem-price">{numberWithSpaces(price)} ₽</h3>
                        <h4 className="buyItem-oldPrice">{oldPrice ? `${oldPrice} ₽` : '' }</h4>
                    </div>
                    <button className="buyProduct-button">В КОРЗИНУ</button>
                </div>
            </div>
        </div>
    )
}

export default ItemProduct;