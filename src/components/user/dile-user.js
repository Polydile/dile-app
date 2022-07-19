import { LitElement, html, css } from 'lit';
import './dile-user-control.js';
import { AuthMixin } from '../../lib/auth-mixin.js';
import '@dile/dile-button/dile-button';

export class DileUser extends AuthMixin(LitElement) {
  static styles = [
    css`
      :host {
        display: block;
        --dile-button-font-size: 0.8rem;
        --dile-button-padding-x: 0.56rem;
        --dile-button-padding-y: 0.35rem;
        --dile-button-background-color: var(--primary-light-color);
        --dile-button-text-color: var(--primary-text-color);
      }
      dile-button {
        margin: 0 0.25rem;
      }
    `
  ];

  render() {
    return html`
      ${this.user 
        ? html`<dile-user-control .user="${this.user}" @logout=${this.doLogout}></dile-user-control>`
        : html`
          <a href="/login"><dile-button>Login</dile-button></a>
          <a href="/register"><dile-button>Register</dile-button></a>
        `
      }
    `;
  }

  firstUpdated() {
    this.checkAuth();
  }
  
  
}
customElements.define('dile-user', DileUser);
