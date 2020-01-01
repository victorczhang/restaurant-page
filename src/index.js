console.log('HELLO VICTOR');
import { pageLoad } from './pageload';
import { contact } from './contact';
import { clear } from './clearDOM';
import { menu } from './menu'

document.getElementById('tab1').addEventListener('click', function() {
    console.log('Tab 1 Initialized. IP has been logged for this incident.')
    document.getElementById('tab1').classList.add('clicked');

    document.getElementById('tab2').classList.remove('clicked');
    document.getElementById('tab3').classList.remove('clicked');

    document.getElementById('content').classList.add('front-page');
    document.getElementById('content').classList.remove('menu');
    document.getElementById('content').classList.remove('contact');
    clear();
    pageLoad();
});

document.getElementById('tab2').addEventListener('click', () => {
    console.log('Tab 2 Initialized. IP has been logged for this incident.')
    document.getElementById('tab2').classList.add('clicked');

    document.getElementById('tab1').classList.remove('clicked');
    document.getElementById('tab3').classList.remove('clicked');

    document.getElementById('content').classList.add('contact');
    document.getElementById('content').classList.remove('front-page');
    document.getElementById('content').classList.remove('menu');
    clear();
    contact();
})

document.getElementById('tab3').addEventListener('click', () => {
    console.log('Tab 3 Initialized. IP has been logged for this incident.')
    document.getElementById('tab3').classList.add('clicked');

    document.getElementById('tab1').classList.remove('clicked');
    document.getElementById('tab2').classList.remove('clicked');

    document.getElementById('content').classList.add('menu');
    document.getElementById('content').classList.remove('contact');
    document.getElementById('content').classList.remove('front-page');
    clear();
    menu();
})

pageLoad();
document.getElementById('tab1').classList.add('clicked');
// nextPage();