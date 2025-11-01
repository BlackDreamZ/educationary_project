import './style.css';

const AddressBlock = (props) => {
    return (
        <div className="addressBlock">
            <div className="addressBlock-text">
                {props.addressText.map((text, index) => {
                    return <p key={index}>{text}</p>
                })}
            </div>
            <a>{props.email}</a>
        </div>
    )
}

export default AddressBlock;