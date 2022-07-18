import { LitElement, html, css } from 'lit';
import { axios, csrf } from '../../lib/axios.js';
import './dile-user-control.js';
import { FeedbackMixin } from '../../lib/feedback-mixin.js';
export class DileUser extends FeedbackMixin(LitElement) {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  /**
    * Declared properties and their corresponding attributes
    */
  static get properties() {
    return {
      user: { type: Object }
    };
  }

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
  
  async checkAuth() {
    await csrf();
    axios
      .get('/api/user', { withCredentials: true })
      .then((response) => {
        this.user = response.data;
        this.dispatchUserDetected();
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.user = null
        } else {
          throw err;
        }
      });
  }

  async doLogout() {
    axios
      .post('/logout')
      .then(() => {
        this.positiveFeedback('Logout realizado');
        this.user = null;
        this.dispatchLogoutDetected();
      })
      .catch(error => {
        this.negativeFeedback('error on logout');
      })
  }  

  dispatchUserDetected() {
    console.log('despachando user detected', this.user);
    this.dispatchEvent(new CustomEvent('user-detected', { 
      detail: { user: this.user }
    }));
  }
  dispatchLogoutDetected() {
    this.dispatchEvent(new CustomEvent('logout-detected'));
  }
}
customElements.define('dile-user', DileUser);
