import React from 'react';
import Button from './Button';

const FavoriteItem = ({id, name, author, year, imageUrl, onRemove}) => {
    const handleRemoveClick = () => {
        onRemove(id);
    }

    return (
        <div className="fav_item d-flex justify-content-around align-middle">
            <img
            className="image2"
            src={imageUrl}
            alt="Book"
            />
            <div className="fav_item_info">
                <h3>{name}</h3>
                <p>{author}</p>
                <p>{year}</p>
            </div>
            <div>
                <Button onClick={handleRemoveClick} className="fav_item_remove btn btn-danger" outline>Удалить из избранного
                </Button>
            </div>
            </div>
    )
}

export default FavoriteItem
