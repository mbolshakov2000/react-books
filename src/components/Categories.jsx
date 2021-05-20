import React from 'react';
import PropTypes from 'prop-types';

// class Categories extends React.Component{

//     state = {
//         activeItem: 0,
//     };

//     onSelectItem = (index) => {
//         this.setState({
//             activeItem: index,
//         });
//     }

//     render(){
//         const {items, onClickItem, children} = this.props;
//         return (
//             <div className="publish_categories d-flex flex-row">
//             <p className="category_name">{children}</p>
//             <ul className="categories">
//             <li className="btn btn-outline-primary active">Все</li>
//                 {items.map((name, index) => <li onClick={() => this.onSelectItem(index)} key={`${name}_${index}`} className={this.state.activeItem === index ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'}>{name}</li>)}
//             </ul>
//             </div>
//         )};
// }

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory, children}){
    return(
        <div className="publish_categories d-flex flex-row">
            <p className="category_name">{children}</p>
            <ul className="categories">
                <li className={activeCategory === null ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'} onClick={() => onClickCategory(null)}>Все</li>
                {items && items.map((name, index) => <li onClick={() => onClickCategory(index)} key={`${name}_${index}`} className={activeCategory === index ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'}>{name}</li>)}
            </ul>
        </div>
    );
});

Categories.propTypes = {
    //activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func
};

Categories.defaultProps = {
    activeCategory: null,
    items: []
}

export default Categories;