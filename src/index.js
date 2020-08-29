import { homePage } from './home-page';
import { menuPage } from './menu-page';
import { contactPage } from './contact-page';

const App = (() => {

    const loadPage = (page) => {
        switch(page) {
            case 'home-page':
                homePage();
                break;
            case 'menu-page':
                menuPage();
                break;
            case 'contact-page':
                contactPage();
                break;
            default:
                console.log('Page error');
        }
    }

    const loadNavbar = () => {
        const menu = document.querySelector('#menu');

        menu.querySelectorAll('div').forEach(op => {
            op.addEventListener('click', () => loadPage(op.id));
        });
    }

    const start = () => {
        loadNavbar();
        loadPage('home-page');
    }

    return { start }
})();

App.start();