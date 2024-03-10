import { Link } from "react-router-dom"

const Item = ({ id, name, category, price, img}) => {
    return (
        <article>
            <h3>categoria:{category}</h3>
            <h3>{name}</h3>
            <img src={img} style={{width:100}}/>
            <h4>precio: ${price}</h4>
            <Link to={`/item/${id}`}>ver detalle</Link>
        </article>
    )
}

export default Item