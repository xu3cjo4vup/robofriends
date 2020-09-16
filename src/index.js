import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots.js';

ReactDOM.render(
              <div>
                <Card name={robots[0].name} id={robots[0].id} email={robots[0].email} />
                <Card name={robots[1].name} id={robots[1].id} email={robots[1].email} />
                <Card name={robots[2].name} id={robots[2].id} email={robots[2].email} />
              </div>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
