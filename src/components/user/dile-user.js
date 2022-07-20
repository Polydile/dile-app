import { LitElement, html, css } from 'lit';
import './dile-user-control.js';
import { AuthMixin } from '../../lib/auth-mixin.js';
import '@dile/dile-button/dile-button';
import '@dile/dile-icon/dile-icon';
import { accountIcon } from '@dile/icons';

export class DileUser extends AuthMixin(LitElement) {
  static styles = [
    css`
      :host {
        display: flex;
        align-items: center;
        --dile-menu-overlay-background-color: var(--primary-light-color);
      }
      dile-button {
        margin: 0 0.25rem;
      }
      .loginbutton {
        cursor: pointer;
        display: flex; 
        align-items: center;
        --dile-icon-size: 32px;
        --dile-icon-color: var(--secondary-dark-color);
      }
      .loginoverlay {
        --dile-menu-overlay-width: 200px;  
      }
      a.loginoption {
        display: block;
        padding: 20px 5px 20px 20px;
        text-decoration: none;
        text-transform: uppercase;
        color: #303030;
        font-weight: bold;
        transition: all 0.3s ease;
        background-color: var(--primary-light-color);
        border-radius: 2px;
      }
      a.loginoption:visited {
        color: #303030;
      }
      a.loginoption:first-child {
        border-bottom: 1px solid #e6e6e6;
      }
      a.loginoption:hover {
        background-color: var(--primary-dark-color);
        color: #fff;
      }
      dile-menu-overlay {
        display: flex;
        align-items: center;
      }
    `
  ];

  render() {
    return html`
      ${this.user 
        ? html`<dile-user-control .user="${this.user}" @logout=${this.doLogout}></dile-user-control>`
        : html`
          <dile-menu-overlay class="loginoverlay" horizontalAlign="under" moveLeft="15">
            <div class="loginbutton" slot="trigger"><dile-icon .icon="${accountIcon}"></dile-icon></div>
            <div slot="content">
              <a class="loginoption" href="/login">Login</a>
              <a class="loginoption" href="/register">Register</a>
            </div>
          </dile-menu-overlay>
        `
      }
    `;
  }

  firstUpdated() {
    this.checkAuth();
  }
  
  
}
customElements.define('dile-user', DileUser);
