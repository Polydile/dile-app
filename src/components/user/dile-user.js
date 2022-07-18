import { LitElement, html, css } from 'lit';
import './dile-user-control.js';
import { AuthMixin } from '../../lib/auth-mixin.js';

export class DileUser extends AuthMixin(LitElement) {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
      ${this.user 
        ? html`<dile-user-control .user="${this.user}" @logout=${this.doLogout}></dile-user-control>`
        : html`
          <a href="/login">Login</a> | <a href="/register">Register</a>
        `
      }
    `;
  }

  firstUpdated() {
    this.checkAuth();
  }
  
  
}
customElements.define('dile-user', DileUser);
