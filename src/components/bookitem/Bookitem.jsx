const BookItem = ({title, author, rating, pageCount, imageUrl, available, summary}) => {
    return (
        <div>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <div>{summary}</div>
            <img src={imageUrl} referrerPolicy="no-referrer"/>
            <div>{rating} estrellas</div>
            <p>{pageCount} páginas</p>
            <p>{available ? "Disponible" : "Reservado"}</p>
        </div>
    )
}

export default BookItem;