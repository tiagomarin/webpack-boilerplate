import _ from 'lodash';
import './style.css';
import Logo from './logo-black.png'
import printMe from './print.js';



function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');


  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Logo;

  element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);


  return element;
}

document.body.appendChild(component());