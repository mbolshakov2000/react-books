import React from 'react';
import classNames from 'classnames';

function Button(props){
    return (
        <span
            onClick={props.onClick}
            className={classNames(props.className)}>
            {props.children}
        </span>
    );
}

export default Button;