import '/src/Styles/menu.css'
export { loadMenu }

let createMenu = () => {
    const menuH2Element = document.querySelector('.about-menu-title');
    menuH2Element.classList.add('menu-title');
    menuH2Element.innerHTML = 'Our Menu';

    const menu = document.createElement('div');
    menu.classList.add('menu')

    menu.appendChild(
        createMenuItems(
            "Pirozhok",
            "Choice of Potato & Onion, Potato & Mushroom",
            "$19.99"
        )
    )
    menu.appendChild(
        createMenuItems(
            "Fish Platter",
            "Assortment of Smoked Fish and Cured Salmon",
            "$29.99"
        )
    )
    menu.appendChild(
        createMenuItems(
            "Salmon Blini",
            "House-Cured, Thinly Sliced Salmon Served on Blini",
            "$20.00"
        )
    )
    menu.appendChild(
        createMenuItems(
            "Salo",
            "Thin Slices of Cured Berkshire Fatback on Toasted Bread",
            "$9.99"
        )
    )
    menu.appendChild(
        createMenuItems(
            "Satsivi",
            "Georgian Speciality of Chicken in a Spicy Coriander",
            "$13.99"
        )
    )
    menu.appendChild(
        createMenuItems(
            "Dolma",
            "Grape Leaves Stuffed with Lamb and Rice",
            "$16.00"
        )
    )
    menu.appendChild(
        createMenuItems(
            "Golubtzi",
            "Braised Veal Wrapped in Cabbage Leaves",
            "$24.99"
        )
    )
    menu.appendChild(
        createMenuItems(
            "Chicken Kiev",
            "Bone-in Chicken Breast Filled with Herbed Butter",
            "$22.99"
        )
    )
    
    return menu;
}

let createMenuItems = (name, description, price) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodItem = document.createElement('h2');
    foodItem.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.innerHTML = description;

    const foodPrice = document.createElement('p');
    foodPrice.innerHTML = price

    const foodImage = document.createElement('img');
    foodImage.src = require(`/src/Images/${name}.png`)
    foodImage.alt = `${name}`

    menuItem.appendChild(foodImage)
    menuItem.appendChild(foodItem);
    menuItem.appendChild(foodDescription);
    menuItem.appendChild(foodPrice)

    return menuItem
}


let loadMenu = () => {
    const menuDiv = document.querySelector('.about-menu-description')
    menuDiv.classList.add('menu-container');
    menuDiv.innerHTML = '';
    menuDiv.appendChild(createMenu())
}