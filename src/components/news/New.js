import "./new.css";

const New = ({title, image, description, data}) => {
    return(
        <li className="new">
                <img src={image} alt={title} className="new__img"/>
                <div className="new_info">
                    <span className="data">{data}</span>
                    <h3 className="new__title">{title}</h3>
                    <p>{description}</p>
                </div>
        </li>
    )
}

export default New;