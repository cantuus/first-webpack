import $ from 'jquery';
import './styles/index.css';
import shoppingList from './scripts/shopping-list.js';

function main() {
  console.log('DOM is loaded');

  const startMsg = $('<p>Webpack is working!</p>');
  $('#root').append(startMsg);
}

$(main);