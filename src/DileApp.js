import { LitElement, html, css } from 'lit';
import { installRouter } from 'pwa-helpers/router.js';

import { dileAppTheme } from './styles/theme';
const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class DileApp extends LitElement {
  static get properties() {
    return {
      page: { type: String },
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
        height: 1.5rem;
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
        <dile-menu-hamburger hamburgerAlwaysVisible slot="menu">
          <dile-selector 
            slot="menu" 
            class="drawernav"
            selected=${this.page}
            attrForSelected="name"
            @dile-selected-changed=${this.navitateSelected}
          > 
            <dile-selector-item icon="navigate_next" name="home">Home</dile-selector-item>
            <dile-selector-item icon="navigate_next" name="login">Login</dile-selector-item>
            <dile-selector-item icon="navigate_next" name="register">Register</dile-selector-item>
            <dile-selector-item icon="navigate_next" name="contact">Contact us</dile-selector-item>
          </dile-selector>
        </dile-menu-hamburger>
        <h1 slot="title">
          <img alt="open-wc logo" src=${logo} /> 
          Dile App
        </h1>
      </dile-nav>
      <main>
        <dile-pages selected="${this.page}" attrForSelected="name">
          <div name="home">Home</div>
          <div name="login">Sección de login</div>
          <div name="register">Sección de register</div>
        </dile-pages>
      </main>
    `;
  }

  handleNavigation(path) {
    path = decodeURIComponent(path);
    if(path === '/') {
      this.page = 'home';
    } else {
      this.page = path.substring(1);
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
}
