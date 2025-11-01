import './style.css';

const SeoSection = (props) => {

    const {
        src,
        title,
        text
    } = props.seoData;

    return (
        <div className="seoSection">
            <img className="seoSection-image" src={src}/>
            <div className="seo-content">
                <h2 className="seo-headline">{title}</h2>
                <div className="seo-textContainer">
                    <p className="seo-text">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default SeoSection;