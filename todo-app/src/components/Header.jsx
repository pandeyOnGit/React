import React from 'react';
import reactDom from 'react-dom';

const Header  = (props)=>{
    return(<h1 className="todoHeader">{props.text}</h1>);
};

export default Header ; 