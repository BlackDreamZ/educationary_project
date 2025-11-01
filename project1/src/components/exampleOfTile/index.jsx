import './style.css';

const ExampleOfTile = (props) => {

    return (
        <div className="exampleOfTile" style={props.style}>
            <div className="exampleOfTile-content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ExampleOfTile;