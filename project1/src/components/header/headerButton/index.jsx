import './style.css';

export const ButtonWithIcon = (props) => {
    return (
        <div className="buttonWithIcon">
            <img src={props.icon} alt={props.title}/>
            <button className="buttonWithIcon-button">{props.title}</button>
        </div>
    )
}