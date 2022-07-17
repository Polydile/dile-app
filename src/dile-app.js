import axios from "axios";

//imports dile-components
import '@dile/dile-app-drawer/dile-app-drawer';
import '@dile/dile-menu-hamburger/dile-menu-hamburger';
import '@dile/dile-nav/dile-nav';
import '@dile/dile-pages/dile-pages';
import '@dile/dile-selector/dile-selector';
import '@dile/dile-selector/dile-selector-item';

import { DileApp } from './DileApp.js';
import './components/sections/dile-page-home.js';
import './components/sections/dile-page-login.js';
import './components/sections/dile-page-register.js';

customElements.define('dile-app', DileApp);

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost';
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json'
};

// const axios = Axios.create({
//     baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
//     headers: {
//         'X-Requested-With': 'XMLHttpRequest',
//     },
//     withCredentials: true,
// })