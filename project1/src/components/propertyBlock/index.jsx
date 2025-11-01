import './style.css';

const PropertyBlock = (props) => {
    return (
        <div className="propertyBlock">
            <img className="propertyBlock-img" src={props.src} alt="" />
            <p className="propertyBlock-text">{props.text}</p>
    </div>
    )
}

export default PropertyBlock;