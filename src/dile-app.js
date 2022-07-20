import { LitElement, html, css } from 'lit';

// imports dile-components
import '@dile/dile-app-drawer/dile-app-drawer';
import '@dile/dile-menu-hamburger/dile-menu-hamburger';
import '@dile/dile-nav/dile-nav';
import '@dile/dile-pages/dile-pages';
import '@dile/dile-selector/dile-selector';
import '@dile/dile-selector/dile-selector-item';
import '@dile/dile-spinner/dile-spinner-modal';

// App imports
import './components/sections/dile-page-home.js';
import './components/dile-feedback.js';
import './components/user/dile-user.js';
import './components/user/dile-resend-confirmation-email.js';

import { installRouter } from 'pwa-helpers/router.js';

import { dileAppTheme } from './styles/theme';
const logo = new URL('./assets/logo-polydile.svg', import.meta.url).href;

export class DileApp extends LitElement {
    static get properties() {
        return {
            section: { type: String },
            user: { type: Object },
        };
    }

    static get styles() {
        return [dileAppTheme, css`
      :host {
        display: block;
        color: var(--primary-text-color);
      }
      .drawernav {
        padding: 1rem; 
      }
      .drawernav a {
        color: #fff;
      }
      h1 {
        display: flex;
        align-items: center;
        margin: 0;
        font-size: 1.2rem;
      } 
      dile-nav img {
        height: 2rem;
        margin-right: 0.5rem;
      }

    `];
    }

    constructor() {
        super();
        this.page = 'home';
        installRouter((location) => this.handleNavigation(location.pathname));
        this.addEventListener('navigate', (e) => this.navigate(e.detail));
    }

    render() {
        return html`
        <dile-nav menu="right">
            <dile-user 
                slot="actions" 
                @user-detected=${this.setUser} 
                @logout-detected=${this.setLogout}
                @not-logged-in=${this.setLogout}
            ></dile-user>
            <dile-menu-hamburger hamburgerAlwaysVisible slot="menu">
                <dile-selector slot="menu" class="drawernav" selected=${this.page} attrForSelected="name"
                    @dile-selected-changed=${this.navitateSelected}>
                    <dile-selector-item icon="navigate_next" name="home">Home</dile-selector-item>
                    <dile-selector-item icon="navigate_next" name="contact">Contact us</dile-selector-item>
                </dile-selector>
            </dile-menu-hamburger>
        <h1 slot="title">
            <img alt="open-wc logo" src=${logo} />
            Dile App
        </h1>
    </dile-nav>
    <main @check-auth=${this.checkAuth}>
        ${this.user === undefined 
            ? html`<dile-spinner-modal active></dile-spinner-modal>`
            : this.displaySection(this.section)
        }
    </main>
    
    <dile-feedback></dile-feedback>
    <dile-resend-confirmation-email .user="${this.user}"></dile-resend-confirmation-email>
    `;
    }

    displaySection(section) {
        switch (section) {
            case 'home':
                import('./components/sections/dile-page-home.js');
                return html`<dile-page-home></dile-page-home>`;
            case 'login':
                import('./components/sections/dile-page-login.js');
                return html`<dile-page-login .user=${this.user}></dile-page-login>`;
            case 'register':
                import('./components/sections/dile-page-register.js');
                return html`<dile-page-register .user=${this.user}></dile-page-register>`;
            case 'contact':
                import('./components/sections/dile-page-contact.js');
                return html`<dile-page-contact></dile-page-contact>`;
            case 'reset-password':
                import('./components/sections/dile-page-password-reset.js');
                return html`<dile-page-password-reset></dile-page-password-reset>`;
            default:
                return html`<dile-page-home></dile-page-home>`;
        }
    }

    handleNavigation(path) {
        path = decodeURIComponent(path);
        let parts = this.splitPath(path);
        if (parts.length == 0) {
            this.section = 'home';
        } else {
            this.section = parts[0];
        }
    }

    navigate(page) {
        window.history.pushState({}, '', '/' + page);
        this.handleNavigation(window.location.pathname);
    }

    goto(page) {
        this.navigate(page);
        this.closeDrawer();
    }

    closeDrawer() {
        this.shadowRoot.querySelector('dile-menu-hamburger').close();
    }

    navitateSelected(e) {
        this.goto(e.detail.selected);
    }

    splitPath(path) {
        let parts = path.split('/');
        return parts.filter(part => part !== '');
    }

    checkAuth() {
        this.shadowRoot.querySelector('dile-user').checkAuth();
    }

    setUser(e) {
        this.user = e.detail.user;
    }

    setLogout() {
        this.user = null;
    }
}

customElements.define('dile-app', DileApp);