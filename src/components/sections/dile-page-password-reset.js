import { LitElement, html, css } from 'lit';
import { AuthMixin } from '../../lib/auth-mixin.js';
import { DileFormMixin } from '@dile/dile-form-mixin';
import '@dile/dile-input/dile-input';
import '@dile/dile-button/dile-button';

export class DilePagePasswordReset extends DileFormMixin(AuthMixin(LitElement)) {
  static styles = [
    css`
      :host {
        display: block;
        padding: 0 0.6rem;
      }
    `
  ];

  firstUpdated() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    if(!params.token) {
      this.positiveFeedback('No token found');
      this.dispatchNavigate('');
    }
    this.shadowRoot.getElementById('resetPasswordToken').value = params.token;
  }

  render() {
    return html`
      <h2>Reset password</h2>
      <form>
        <input type="hidden" name="token" id="resetPasswordToken"></p>
        <p>
          <dile-input label="Email" type="email" name="email" id="email_reset" placeholder="Email" value=""></dile-input>
        </p>
        <p>
          <dile-input label="Password" type="password" name="password" id="reset_password_register" placeholder="Password" value="1234qwer"></dile-input>
        </p>
        <p>
          <dile-input label="Password confirmation" type="password" name="password_confirmation" id="reset_password_confirmation"
            placeholder="Repeat the password" value="1234qwer"></dile-input>
        </p>
        <p>
          <dile-button @click=${this.doReset}>Reset password</dile-button>
        </p>
        </form>

    `;
  }

  doReset(e) {
    let data = this.getData();
    this.resetPassword(data);
  }
}
customElements.define('dile-page-password-reset', DilePagePasswordReset);
