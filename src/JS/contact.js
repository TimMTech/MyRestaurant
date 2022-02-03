import '/src/Styles/contact.css'
import Image from '/src/Images/snippet.png'
export { loadContact } 


let createContact = () => {
    const contactH2Element = document.querySelector('.about-menu-title')
    contactH2Element.classList.add('contact-title')
    contactH2Element.innerHTML = 'Contact Us';

    const contact = document.createElement('div')
    const phoneNumber = document.createElement('p')
    const address = document.createElement('p');
    const location = document.createElement('img');
    
    location.src = Image;
    location.alt = 'Salute Style Restaureant'
    location.classList.add('location-image')
    
    contact.classList.add('contact');
    phoneNumber.innerHTML = '555-555-5555'
    address.innerHTML = 'Rego Park, Queens NY'

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(location)

    return contact;
}

let loadContact = () => {
    const contactDiv = document.querySelector('.about-menu-description');
    contactDiv.classList.add('contact-description')
    contactDiv.innerHTML = '';
    contactDiv.appendChild(createContact())
}










