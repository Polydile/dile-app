import { LitElement, html, css } from 'lit';
import { AuthMixin } from '../../lib/auth-mixin.js';
import '@dile/dile-message/dile-message.js';
import '@dile/dile-button/dile-button.js';

export class DileResendConfirmationEmail extends AuthMixin(LitElement) {
  static styles = [
    css`
      :host {
        display: block;
        --dile-message-background-color: var(--primary-darker-color);
        --dile-button-background-color: var(--secondary-color);
        --dile-button-text-color: var(--secondary-text-color);
      }
      a {
        color: #ffc;
      }
    `
  ];

  render() {
    return html`
    ${this.user && !this.user.email_verified_at
      ? html`
        <dile-message hideCloseIcon opened fixedOnBottom>
          <p>
            Your user is not verified. Please check your email and click on the confirmation link.
            <br><br>
            <dile-button @click="${this.resendConfirmation}">Resend confirmation email</dile-button>
          </p>
          
        </dile-message>
        
      `
      : ''
    }
    `;
  }
}
customElements.define('dile-resend-confirmation-email', DileResendConfirmationEmail);
