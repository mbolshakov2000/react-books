import React from 'react'
import {FavoriteItem} from '../components';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {clearFavorites, removeFavoritesItem} from '../redux/actions/favorites';

function Favorites() {
    const dispatch = useDispatch();
    const {totalCount,items} = useSelector(({ favorites }) => favorites);

    const addedBooks = Object.keys(items).map(key => {
        return items[key][0];
    });

    const onClearFavorites = () => {
        dispatch(clearFavorites());
    };
    
    const onRemoveItem = (id) => {
        dispatch(removeFavoritesItem(id));
    }

    return (
        <div className="container">
            { totalCount ?
            <div className="favorites">
                <div className="fav_top d-flex justify-content-between">
                    <h2> Избранное ({totalCount} шт.)</h2>
                    <div>
                        <span className="btn btn-primary" onClick={onClearFavorites}>Очистить избранное</span>
                    </div>
                </div>
                <div className="content_items d-flex flex-column">
                    {addedBooks.map(obj => <FavoriteItem key={obj.id} id={obj.id} name={obj.name} imageUrl={obj.imageUrl} author={obj.author} year={obj.year} onRemove={onRemoveItem} />)}
                </div>
            </div> : <div>
                <h2> Избранное </h2>
                <h2 className="empty"> Тут пусто </h2>
            </div> }
            <Link to="/react-books"><span className="btn btn-primary to_main">На главную</span></Link>
        </div>
    )
}

export default Favorites
