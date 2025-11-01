import './style.css';

const ArticleItem = (props) => {
    return (
        <div className="articleItem">
            <img src={props.src} alt={props.title} />
            <h4>{props.title}</h4>
        </div>
    )
}

export default ArticleItem;