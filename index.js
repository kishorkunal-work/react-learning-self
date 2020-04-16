import React from 'react';
import { render } from 'react-dom';


function Timer()
{
  var el = (<div>Clock : {new Date().toLocaleTimeString()}</div>)
  render(el, document.getElementById('root1'));
}

setInterval(Timer , 1000)



