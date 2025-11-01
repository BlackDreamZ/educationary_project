import './style.css';
import instagramIcon from '../../assets/icons/footer/instagramIcon.png'
import telegramIcon from '../../assets/icons/footer/telegramIcon.png'
import whatsappIcon from '../../assets/icons/footer/whatsappIcon.png'

const ContactInformation = (props) => {
    return (
        <div className="contactInformation">
            <div className="contactInformation__heading">
                <p className="contactInformation-title">{props.title}</p>
                <button className="contactInformation-button">{props.textButton}</button>
                <div className="contactInformation-text">
                    {props.text.map((item, index) => {
                        return <p>{item}</p>
                    })}
                </div>
            </div>
            <div className="contactInformation-socials">
                <img src={instagramIcon}  alt="image"/>
                <img src={telegramIcon}  alt="image" />
                <img src={whatsappIcon}  alt="image" />
            </div>
        </div>
    )
}

export default ContactInformation;