const menuPage = () => {
    const menuData = [
        {
            "name" : "Starters",
            "options" : [
                {
                    "name" : "Cactus salad",
                    "description" : "A salad made from the succulent pads of the prickly pear, sword pear, and saguaro. Served with a sweet chilli marinade"
                }, 
                {
                    "name" : "Toasted Arizona Desert hairy scorpion",
                    "description" : "Three large hadrurus arizonensis scorpions harvested from the Mojave Desert toasted until golden brown, served with a small side of desert turf grass."
                }, 
                {
                    "name" : "Regal horned lizard barbeque",
                    "description" : "One large phrynosoma solare marinated for 24 hours in aloe vera paste, barbequed until crispy."
                }
            ]
        }, 
        {
            "name" : "Mains",
            "options" : [
                {
                    "name" : "Date jam served with pita",
                    "description" : "A jam made with ripe dates and served with 2 large freshly made pitas."
                }, 
                {
                    "name" : "Mesquite soup",
                    "description" : "Out finest mesquite seeds cooked in desert water and served with olive oil and a slice of lemon."
                }, 
                {
                    "name" : "Bactrian camel kabsa",
                    "description" : "A 250g cut of Camelus bactrianus loin imported from the Gobi Desert, marinated in spices and grilled over a fire. Served with 350g of rice."
                }
            ]
        }, 
        {
            "name" : "Desserts",
            "options" : [
                {
                    "name" : "Wolfberry soufflé",
                    "description" : "A sublime soufflé made using freshly harvested and imported Lycium exsertum berries straight from the lower Sonora Desert."
                }, 
                {
                    "name" : "Tequila chocolate truffles",
                    "description" : "Decadent chocolate truffles made using fresh tequila pressed in-house from newly harvested agave."
                }, 
                {
                    "name" : "Dromedary camel yoghurt",
                    "description" : "A cool yoghurt made from freshly squeezed camel milk. Served with cucumbers and parsley."
                }
            ]
        }, 
    ];

    const content = document.querySelector('#content');
    const menuDiv = document.createElement('div');
    const container = document.createElement('div');
    const menuGrid = document.createElement('div');
    const h1 = document.createElement('h1');

    menuDiv.className = 'menu-page';
    container.className = 'container';
    menuGrid.className = 'menu-grid';

    h1.innerText = 'Our menu';

    menuData.forEach(menu => {
        const menuDiv = document.createElement('div');
        const menuH2 = document.createElement('h2');

        menuDiv.className = 'menu-div';
        menuH2.innerText = menu.name;
        menuDiv.appendChild(menuH2);

        menu.options.forEach(option => {
            const menuH3 = document.createElement('h3');
            const menuDesc = document.createElement('p');
            menuH3.innerText = option.name;
            menuDesc.innerText = option.description;
            menuDiv.appendChild(menuH3);
            menuDiv.appendChild(menuDesc);
        });

        menuGrid.appendChild(menuDiv);
    });

    container.appendChild(h1);
    container.appendChild(menuGrid);
    menuDiv.appendChild(container);
    content.innerHTML = '';
    content.appendChild(menuDiv);
}

export { menuPage }