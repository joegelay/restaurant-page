const pageLoad = () => {
    const container = document.querySelector('#content');

    const headline = document.createElement('h1');
    const tacoPhoto = document.createElement('img');
    const blurb = document.createElement('p');

    headline.textContent = 'Welcome to Joe\'s Vegan Eats';
    tacoPhoto.setAttribute('src', 'https://www.plantoeat.com/wp-content/uploads/2018/06/vegan-tacos.jpg');
    tacoPhoto.setAttribute('alt', 'A picture of homemade tacos');
    blurb.textContent = 'An ALL-VEGAN eatery serving homemade Latin, Italian and American comfort food made with organic, fair-trade ingredients and kindness!';
    blurb.style.textAlign = 'center';

    container.appendChild(headline);
    container.appendChild(tacoPhoto);
    container.appendChild(blurb);
};


const makeTabSelector = () => {
    
    const main = document.querySelector('main');
    const tabContainer = document.createElement('div');
    tabContainer.id = 'tab-container';

    const tabHome = document.createElement('div');
    tabHome.classList.add('tab', 'selected');
    tabHome.textContent = 'Home';
    tabHome.setAttribute('data-trigger', 'pageLoad');

    const tabMenu = document.createElement('div');
    tabMenu.classList.add('tab');
    tabMenu.textContent = 'Menu';
    tabMenu.setAttribute('data-trigger', 'createMenu');

    const tabContact = document.createElement('div');
    tabContact.classList.add('tab');
    tabContact.textContent = 'Contact Us';
    tabContact.setAttribute('data-trigger', 'createContact');

    tabContainer.appendChild(tabHome);
    tabContainer.appendChild(tabMenu);
    tabContainer.appendChild(tabContact);

    main.insertBefore(tabContainer, main.firstChild);
    return [ tabHome, tabMenu, tabContact ];
};

export { pageLoad, makeTabSelector };