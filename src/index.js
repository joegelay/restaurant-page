  import { pageLoad, makeTabSelector } from './load-html.js';
  import { createContact } from './contact-tab.js';
  import { createMenu } from './menu-tab.js';
  

  const container = document.querySelector('#content');
  const tabs = makeTabSelector();
  tabs.forEach(tab => tab.addEventListener('click', (e) => {
      while (container.firstChild) {
          container.removeChild(container.firstChild);
      }
      let targetFunctionName = e.target.attributes['data-trigger'].value;
      switch(targetFunctionName) {
          case 'pageLoad':
              pageLoad();
              break;
          case 'createContact':
              createContact();
              break;
          case 'createMenu':
              createMenu();
              break;
      }
      tabs.forEach(tab => tab.classList.remove('selected'));
      e.target.classList.add('selected');
  }))

pageLoad();