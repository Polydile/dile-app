import { LitElement, html, css } from 'lit';
import { installRouter } from 'pwa-helpers/router.js';

import { dileAppTheme } from './styles/theme';
const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class DileApp extends LitElement {
  static get properties() {
    return {
      section: { type: String },
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
        ${this.displaySection(this.section)}
      </main>
    `;
  }

  displaySection(section) {
    switch(section) {
      case 'home':
        return html`<dile-page-home></dile-page-home>`;
      case 'login':
        return html`<dile-page-login></dile-page-login>`;
      case 'register':
        return html`<dile-page-register></dile-page-register>`;
      case 'contact':
        return html`<dile-page-contact></dile-page-contact>`;
      default:
        return html`<dile-page-home></dile-page-home>`;
    }
  }

  handleNavigation(path) {
    path = decodeURIComponent(path);
    let parts = this.splitPath(path);
    if(parts.length == 0) {
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
}
