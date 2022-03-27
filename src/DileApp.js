import { LitElement, html, css } from 'lit';
import { dileAppTheme } from './styles/theme';
const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class DileApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
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
    this.title = 'My app';
  }

  render() {
    return html`
      <dile-nav menu="right">
        <dile-menu-hamburger hamburgerAlwaysVisible slot="menu">
          <nav slot="menu" class="drawernav">
            <p><a href="#">Link 1</a></p>
            <p><a href="#">Another link</a></p>
            <p><a href="#">More information</a></p>
            <p><a href="#">Contact us</a></p>
          </nav>
        </dile-menu-hamburger>
        <h1 slot="title">
          <img alt="open-wc logo" src=${logo} /> 
          Dile App
        </h1>
      </dile-nav>
      <main>
        <div class="logo"></div>
      </main>
    `;
  }
}
