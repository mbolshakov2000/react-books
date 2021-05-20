import React from 'react';

import {Header} from './components';
import {Home, Favorites} from './pages';
import {Route} from 'react-router-dom';

function App() {
  return(
    <div className="wrapper">
          <Header />
          <div className="content">
            <Route path="/react-books" component={Home} exact />
            <Route path="/react-books/favorites" component={Favorites} exact /> 
          </div>
        </div>
  );
}

 

// const mapStateToProps = (state) => {
//   return {
//     items: state.books.items,
//     filters: state.filters,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     setBooks: (items) => dispatch(setBooks(items)),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default connect(
//   (state) => {
//     return {
//       items: state.books.items,
//       filters: state.filters,
//     };
//   },
//   (dispatch) => {
//     return {
//       setBooks: (items) => dispatch(setBooks(items)),
//     };
//   },
// )(App);

export default App;
