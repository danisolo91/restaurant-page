const contactPage = () => {
    const content = document.querySelector('#content');
    const contactDiv = document.createElement('div');
    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const addressDiv = document.createElement('div');

    contactDiv.className = 'contact-page';
    container.className = 'container';
    addressDiv.className = 'address';

    h1.innerText = 'Contact'
    addressDiv.innerHTML = `
    <h2>The Restaurant</h2><br>
    Pl. Sant Jaume, S/N<br>
    08002 Barcelona, Spain<br>
    <br>
    Tel: 666-555-444<br>
    contact@therestaurant.com
    `;

    container.appendChild(h1);
    container.appendChild(addressDiv);
    contactDiv.appendChild(container);
    content.innerHTML = '';
    content.appendChild(contactDiv);
}



export { contactPage  }