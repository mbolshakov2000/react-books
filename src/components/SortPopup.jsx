import React from 'react';
import PropTypes from 'prop-types';

const SortPopup = React.memo(function SortPopup({ items, activeSortType, activeOrderType, onClickSortType }){
    const[visiblePopup, setVisiblePopup] = React.useState(false);

    const sortRef = React.useRef();
    const activeLabel = items.find(obj => obj.type === activeSortType).name;

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    };

    const handleOutsideClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(sortRef.current)){
            setVisiblePopup(false);
        }
    }

    const onSelectItem = (index) => {
        if (onClickSortType)
          onClickSortType(index);
        setVisiblePopup(false);
    }

    React.useEffect(() =>  {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return (
        <div ref={sortRef} className="sort">
        <div>
          <b className="sort_label">Сортировка по: </b>
          <span className="btn sort_name" onClick={toggleVisiblePopup}>{activeLabel}  {!visiblePopup && <i className="fa fa-caret-down"></i>}{visiblePopup && <i className="fa fa-caret-up"></i>}</span>
          
        </div>
        {visiblePopup && <div className="sort_popup">
          <ul>
            {items && items.map((obj, index) => <li onClick={() => onSelectItem(obj)} key={`${obj.type}_${index}`} className={activeSortType === obj.type && activeOrderType === obj.order ? 'sort_name btn disabled' : 'sort_name btn'}>{obj.name}</li>)}
          </ul>
        </div>}
      </div>
    )
});

SortPopup.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickSortType: PropTypes.func.isRequired,
};

SortPopup.defaultProps = {
  items: []
};

export default SortPopup