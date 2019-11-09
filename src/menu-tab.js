
const createMenu = () => {
    const container = document.querySelector('#content');

    const menuDiv = document.createElement('div');
    const menuHeadline = document.createElement('h2');
    const menuList = document.createElement('ul');
    const itemOne = document.createElement('li');
    const itemTwo = document.createElement('li');
    const itemThree = document.createElement('li');
    const itemFour = document.createElement('li');
    const itemFive = document.createElement('li');
    const itemSix = document.createElement('li');

    menuHeadline.textContent = 'Here\'s what we\'re cooking up...';
    itemOne.textContent = 'Al Pastor Tacos';
    itemTwo.textContent = 'Eggplant Parm Pizza';
    itemThree.textContent = 'Mac & Cheez';
    itemFour.textContent = '7-Layer Dip Burritos';
    itemFive.textContent = 'Pozole';
    itemSix.textContent = 'Fried Chick\'n Sandwich';


    menuList.appendChild(itemOne);
    menuList.appendChild(itemTwo);
    menuList.appendChild(itemThree);
    menuList.appendChild(itemFour);
    menuList.appendChild(itemFive);
    menuList.appendChild(itemSix);

    menuDiv.appendChild(menuHeadline);
    menuDiv.appendChild(menuList);

    container.appendChild(menuDiv);
}

export { createMenu };