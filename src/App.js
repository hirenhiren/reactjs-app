import React from 'react';
import Item from './components/Item';
const App = (props) =>{
  return(
    <div>
      <h1> Learn ReactJs From Scratch </h1>
      <Item>{props.day}</Item>
    </div>
  );
}

export default App