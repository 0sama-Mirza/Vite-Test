import markdownIt from 'markdown-it';
import copy from './src/assets/markdown/DBZ.md?raw';
import javascriptLogo from './javascript.svg';
import './src/css/style.css';
import { setupCounter } from './src/js/counter.js';
import './src/js/logs.js';
import './src/js/something.js';
import viteLogo from '/vite.svg';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  ${markdownIt().render(copy)}
`;

setupCounter(document.querySelector('#counter'));

fetch('/footer.html')
  .then(response => response.text())
  .then(footerHtml => {
    document.querySelector('#app').insertAdjacentHTML('beforeend', footerHtml);
  });
