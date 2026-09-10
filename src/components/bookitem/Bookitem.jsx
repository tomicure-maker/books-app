import { Badge, Card, Button } from "react-bootstrap";
import { Navigate } from "react-router";
const BookItem = ({id, title, author, rating, pageCount, imageUrl, available, summary }) => {

    const handleClick = () => {
        Navigate(`library/${id}`, {
            state: {
                book:{
                    title,
                    author,
                    pageCount,
                    summary,
                    imageUrl,
                    available,
                },
            },
        })
    }

    return (
        <Card style={{ width: "22rem" }} className="mx-3">
            <Card.Img
                height = {400}
                variant="top"
                src={imageUrl !== "" ? imageUrl : "https://bit.ly/47Nylzk"}
                referrerPolicy="no-referrer"
            />
            <Card.Body>
                <div className="mb-2">
                    {available ?
                        <Badge bg="success">Disponible</Badge>
                        :
                        <Badge bg="danger">Reservado</Badge>    
                    }
                </div>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{author}</Card.Subtitle>
                <div>{rating} estrella {rating > 1 ? "s" : ""} </div>
                <p>{pageCount} páginas</p>
                <Button onClick = {handleClick}>
                    Seleccionar libro
                </Button>
                <Button variant="danger">
                    Eliminar
                </Button>
            </Card.Body>
        </Card>
    )
}

export default BookItem;