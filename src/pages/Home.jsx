import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {Categories, Search, SortPopup, BookBlock, BookLoadingBlock} from '../components';

import {setCategoryPublish, setCategoryAuthor, setCategoryYear, setSortBy, setSearchQuery} from '../redux/actions/filters';
import {fetchBooks} from '../redux/actions/books';

const publishCategories = ['Астрель-СПб', 'Эксмо', 'МИФ', 'АСТ'];
const authorCategories = ['Барто Агния', 'Брэдбери Рэй', 'Оруэлл Джордж', 'Пушкин Александр', 'Толстой Лев'];
const yearCategories = ['2019', '2017', '2015', '2013', '2011'];
const sortItems =[
  {name: 'рейтингу (наибольший)', type: 'rating', order: 'desc' }, 
  {name: 'рейтингу (наименьший)', type: 'rating', order: 'asc' },
  {name: 'дате издания (новая)', type:'year', order: 'desc' }, 
  {name: 'дате издания (старая)', type:'year', order: 'asc' }, 
  {name: 'алфавиту (с начала)', type: 'name', order: 'asc'},
  {name: 'алфавиту (с конца)', type: 'name', order: 'desc'},
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({books}) => books.items);
  const favoriteItems = useSelector(({favorites}) => favorites.items);
  const uppedItems = useSelector(({ratings}) => ratings.upItems);
  const downedItems = useSelector(({ratings}) => ratings.downItems);
  const isLoaded = useSelector(({books}) => books.isLoaded);
  const {categoryPublish, categoryAuthor, categoryYear, searchQuery, sortBy} = useSelector(({filters}) => filters);

  React.useEffect(() => {
    dispatch(fetchBooks(sortBy, categoryPublish, categoryAuthor, categoryYear, searchQuery));
  }, [categoryPublish, categoryAuthor, categoryYear, searchQuery, sortBy]);

  const onSelectCategoryPublish = React.useCallback((index) => {
    dispatch(setCategoryPublish(index));
  }, []);

  const onSelectCategoryAuthor = React.useCallback((index) => {
    dispatch(setCategoryAuthor(index));
  }, []);

  const onSelectCategoryYear = React.useCallback((index) => {
    dispatch(setCategoryYear(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const onSearch = React.useCallback((text) => {
    dispatch(setSearchQuery(text));
  }, []);

  const handleAddBookToFavorites = (obj) => {
    dispatch({
        type: 'ADD_BOOK_FAVORITES',
        payload: obj,
    });
  };
  const handleUpRating = (obj) => {
    dispatch({
        type: 'UP_RATING',
        payload: obj,
    });
  };
  const handleDownRating = (obj) => {
    dispatch({
        type: 'DOWN_RATING',
        payload: obj,
    });
  };
  console.log(uppedItems, downedItems);
    return (
        <div className="container">
        <div className="content_top d-flex flex-row justify-content-between">
          <div>
            <Categories activeCategory={categoryPublish} onClickCategory={onSelectCategoryPublish} items={publishCategories}>Издательство</Categories>
            <Categories activeCategory={categoryAuthor} onClickCategory={onSelectCategoryAuthor} items={authorCategories}>Автор</Categories>
            <Categories activeCategory={categoryYear} onClickCategory={onSelectCategoryYear} items={yearCategories}>Год издания</Categories>
          </div>
          <SortPopup activeSortType={sortBy.type} activeOrderType={sortBy.order} items={sortItems} onClickSortType={onSelectSortType} />
        </div>
        <Search value={searchQuery} onChange={e => onSearch(e.target.value)}>Поиск</Search>
        <div className="content_items d-flex flex-row flex-wrap justify-content-around">
          {isLoaded ? items.map((obj) => (
            <BookBlock added={favoriteItems[obj.id]} upped={uppedItems[obj.id]} downed={downedItems[obj.id]} onClickUpRating={handleUpRating} onClickDownRating={handleDownRating} onClickAddBook={handleAddBookToFavorites} key={obj.id} isLoading={true} {...obj} />
          )) : Array(10).fill(0).map((_, index) => <BookLoadingBlock key={index} />)}
        </div>
      </div>
    )
}

export default Home
