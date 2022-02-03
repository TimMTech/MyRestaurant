import '/src/Styles/style.css'
import Icon from '/src/Images/icon.png'
import { loadContact } from '/src/JS/contact.js'
import { loadMenu } from '/src/JS/menu.js'


let createTopNav = () => {
    const nav = document.createElement('nav');
    const homeNav = document.createElement('div');
    const contactNav = document.createElement('div');
    const menuNav = document.createElement('div');

    nav.classList.add('top-nav');

    homeNav.classList.add('home-btn');
    homeNav.addEventListener('click', () => {
        location.reload()
    })

    contactNav.classList.add('contact-btn');
    contactNav.addEventListener('click', () => {
        loadContact()
    })

    menuNav.classList.add('menu-btn')
    menuNav.addEventListener('click', () => {
        loadMenu()
    })

    homeNav.innerHTML = 'Home';
    contactNav.innerHTML = 'Contact';
    menuNav.innerHTML = 'Menu'

    nav.append(homeNav, contactNav, menuNav);

    return nav;
}


let createHeader = () => {
    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');
    const myIcon = new Image();

    //Title
    header.classList.add('header');
    headerTitle.classList.add('header-title');

    //Icon
    myIcon.src = Icon;
    myIcon.classList.add('header-icon')
    headerTitle.innerHTML = 'From Russia With Love';


    header.appendChild(myIcon);
    header.appendChild(headerTitle);

    return header;
}

let mainContainer = () => {
    const mainContainerDiv = document.createElement('div');
    const h2Element = document.createElement('h2');
    const paraElement = document.createElement('p');

    mainContainerDiv.classList.add('main-container');
    h2Element.classList.add('about-menu-title');
    paraElement.classList.add('about-menu-description');

    h2Element.innerHTML = 'Our Russian Somavar Menu';
    paraElement.innerHTML = `Russian Samovar has a menu featuring 
    both traditional, old-world dishes and more modern, 
    eclectic fare with Eastern European flourishes. 
    Our Russian food menu will remind you of your babushka’s 
    kitchen in Mother Russia. And because we cook everything from scratch, 
    you will enjoy the flavors at their best.`

    mainContainerDiv.append(h2Element, paraElement);

    return mainContainerDiv;

}

let footer = () => {
    const footer = document.createElement('footer');
    const copyrightDiv = document.createElement('div');

    footer.classList.add('footer');
    copyrightDiv.classList.add('footer-cp');

    copyrightDiv.innerHTML = 'Copyright @ 2022 Tim Mukhamedov'

    footer.appendChild(copyrightDiv);

    return footer;
}

const mainContent = document.getElementById('content');


mainContent.appendChild(createTopNav())
mainContent.appendChild(createHeader())
mainContent.appendChild(mainContainer())
mainContent.appendChild(footer())

