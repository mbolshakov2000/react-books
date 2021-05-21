import React from 'react'
import PropTypes from 'prop-types';

import Button from '../Button';

function BookBlock({ id, name, imageUrl, author, rating, year, onClickAddBook, onClickUpRating, onClickDownRating, upped, downed, added }) {
    
    // const [activeRating, setActiveRating] = React.useState(3);

    // const onSelectRating = (index) => {
    //     setActiveRating(index);
    // }
    const onAddBook = () => {
        const obj = {
            id,
            name,
            imageUrl,
            author,
            year,
            rating,
        };
        onClickAddBook(obj);
    };
    const onUpRating = () => {
        const obj = {
            id,
            rating
        };
        onClickUpRating(obj);
    };
    const onDownRating = () => {
        const obj = {
            id,
            rating
        };
        onClickDownRating(obj);
    };
    return (
        <div className="book_block col-3">
            <img 
            className="book_block_image"
            src={imageUrl}
            alt="Book"
            />
            <h4 className="book_block_title">{ name }</h4>
            <div className="book_block_bottom">
                <div className="book_block_author">{author}</div>
                <div className="book_block_year">{year}</div>
                <div className="rating">
                    <span className="book_block_author">Оценить</span>
                    <Button onClick={onUpRating} className={upped !== undefined ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'}><i className="fa fa-minus"></i></Button>
                    <Button onClick={onDownRating} className={downed !== undefined ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'}><i className="fa fa-plus"></i></Button>
                    <Button onClick={onAddBook} className={added !== undefined ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'}>{added !== undefined ? 'В избранном' : 'В избранное'}</Button>
                </div>

            </div>
        </div>  
    )
}

BookBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string,
    author: PropTypes.string,
    year: PropTypes.number,
    onAddBook: PropTypes.func,
};

BookBlock.defaultProps = {
    name: 'test',
    author: 'Неизвестен',
    year: 'Неизвестен',
}

export default BookBlock
