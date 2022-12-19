import { createApp } from 'vue'
import App from './App.vue'

let init = false;

function initializeApp() {
    if (!init) {
        let app = createApp(App).mount('#app');
    }
    init = true;
}

window.initializeApp = initializeApp;


//let url = 'https://nominatim.openstreetmap.org/search?q=' + location.value +
//'&format=json&limit=25&accept-language=en'
