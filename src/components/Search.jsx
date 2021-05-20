import React from 'react';

function Search(props){
  return (
    <input 
    type="text" className="form-control"
    value = {props.value}
    onChange={props.onChange}
    placeholder={props.children}
  />
  );
};

export default Search;