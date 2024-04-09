import {getDiscript} from '/js/data.js';
import {fragment} from './render.js';

const pictureArea = document.querySelector('.pictures');
pictureArea.appendChild(fragment);

console.log(getDiscript);
