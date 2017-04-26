
/*import React from 'react';
import ReactDOM from 'react-dom';
*/import _ from 'lodash';
import css from './index.css'

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack','Dude'], ' ');

  return element;
}

document.body.appendChild(component());