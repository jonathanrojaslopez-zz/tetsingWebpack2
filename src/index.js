
/*import React from 'react';
import ReactDOM from 'react-dom';
*/
//import _ from 'lodash';
import css from './index.scss';
import Button from './components/Atoms/button';
import React from 'react';
import ReactDOM from 'react-dom';

const esTest = () => {
	console.log(`hi dude hre`)
}

esTest()

/*ReactDOM.render(
  <h1>Hello, world here!</h1>,
  document.getElementById('root')
);*/

ReactDOM.render(
  <Button/>,
  document.getElementById('root')
);