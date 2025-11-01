import CategoryBlock from "./category";

const CategoriesBlock = (props) => {
    return (
        <div className="categoriesBlock">
            {props.categories.map(category => {
                return (<CategoryBlock key={category} titleCategory={category}/>)
            })}
        </div>
    )
}

export default CategoriesBlock;