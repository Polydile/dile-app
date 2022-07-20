import { LitElement, html, css } from 'lit';
import { AuthMixin } from '../../lib/auth-mixin.js';
import '@dile/dile-message/dile-message.js';
import '@dile/dile-button/dile-button.js';

export class DileResendConfirmationEmail extends AuthMixin(LitElement) {
  static styles = [
    css`
      :host {
        display: block;
        --dile-message-background-color: var(--secondary-color);
        --dile-button-font-size: 0.8rem;
        --dile-message-padding: 1rem 2rem;
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
        <dile-message hideCloseIcon opened position="right-bottom">
          <h2>You are logged-in</h2>
          <p>
            Before start using the app you need to verify your email account. We have sent an email to you. <b>Please check your email and click on the confirmation link</b>.
          </p>
          <p>
            If you couldn't find the email click on <a href="#" @click="${this.resendConfirmation}">resend the confirmation email</a>.
          </p>
          
        </dile-message>
        
      `
      : ''
    }
    `;
  }
}
customElements.define('dile-resend-confirmation-email', DileResendConfirmationEmail);
