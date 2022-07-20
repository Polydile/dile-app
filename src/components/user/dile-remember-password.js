import { LitElement, html, css } from 'lit';
import { AuthMixin } from '../../lib/auth-mixin.js';
import { DileFormMixin } from "@dile/dile-form-mixin";
import "@dile/dile-modal/dile-modal.js";

export class DileRememberPassword extends AuthMixin(DileFormMixin(LitElement)) {
  static styles = [
    css`
      :host {
        display: block;
      }
      a {
        color: var(--secondary-color);
      }
    `
  ];

  firstUpdated() {
    this.modal = this.shadowRoot.getElementById('elmodal');
  }

  render() {
    return html`
    <a href="#" @click=${this.openRememberPassword}>Forgot your password?</a>
    <dile-modal id="elmodal" showCloseIcon blocking>
      <p>Forgot your password? No problem. Just let us know your
      email address and we will email you a password reset link
      that will allow you to choose a new one.</p>
      <dile-input name="email" label="Email"></dile-input>
      <dile-button @click=${this.doSendForgotPassword}>Send remember email</dile-button>
    </dile-modal>
    `;
  }


  closeModal() {
    this.modal.close();
  }

  openRememberPassword(e) {
    e.preventDefault();
    this.modal.open();
  }

  doSendForgotPassword(e) {
    let data = this.getData();
    this.sendForgotPassword(data.email);
  }
}
customElements.define('dile-remember-password', DileRememberPassword);
