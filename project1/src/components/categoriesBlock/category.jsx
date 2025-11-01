import './style.css';

const CategoryBlock = (props) => {
    return (
        <button className="categoryBlock">{props.titleCategory}</button>
    )
}
export default CategoryBlock;