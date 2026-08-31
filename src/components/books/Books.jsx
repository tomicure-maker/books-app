import { useState } from "react";
import BookItem from "../bookitem/Bookitem";

const Books = ({ books }) => {
    const [selectedBook, setSelectedBook] = useState("");

    const handleBookSelection = (title) => {
        setSelectedBook(title);
    };

    return (
        <div>
            <p>Libro seleccionado: {selectedBook || "Ninguno"}</p>
            <div className="d-flex justify-content-center flex-wrap">
                {books.map((book) => (
                    <BookItem
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        rating={book.rating}
                        pageCount={book.pageCount}
                        imageUrl={book.imageUrl}
                        available={book.available}
                        onSelectBook={handleBookSelection}
                    />
                ))}
            </div>
        </div>
    );
};

export default Books;
