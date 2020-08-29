const homePage = () => {
    const content = document.querySelector('#content');
    const homeDiv = document.createElement('div');
    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    homeDiv.className = 'home-page';
    container.className = 'container';

    h1.innerText = 'Welcome';
    p.innerText = 'Est ei erat mucius quaeque. Ei his quas phaedrum, efficiantur mediocritatem ne sed, hinc oratio blandit ei sed. Blandit gloriatur eam et. Brute noluisse per et, verear disputando neglegentur at quo. Sea quem legere ei, unum soluta ne duo. Ludus complectitur quo te, ut vide autem homero pro.';

    container.appendChild(h1);
    container.appendChild(p);
    homeDiv.appendChild(container);
    content.innerHTML = '';
    content.appendChild(homeDiv);
}

export { homePage }