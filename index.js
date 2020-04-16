import React from 'react';
import { render } from 'react-dom';

function ByFunction(props)
{
  return <h1>hello {props.name}</h1>
}

var element = <h1>hello name</h1>

render(<ByFunction name="name from function"/>, document.getElementById('root'));

render(ByFunction({name:"jello"}), document.getElementById('root1'));

