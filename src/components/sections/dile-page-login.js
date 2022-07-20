import { LitElement, html, css } from 'lit';
import { AuthMixin } from '../../lib/auth-mixin.js';
import {DileFormMixin} from '@dile/dile-form-mixin';
import '@dile/dile-input/dile-input';
import '@dile/dile-button/dile-button';
import '@dile/dile-checkbox/dile-checkbox';
import '../user/dile-remember-password';

export class DilePageLogin extends DileFormMixin(AuthMixin(LitElement)) {
    static styles = [
        css`
            :host {
                display: block;
                padding: 0 0.6rem;
            }
            .actions {
                display: flex;
                justify-content: space-between;
            }
            .actions p {
                margin: 0;
            }
        `
    ];

    static get properties() {
        return {
            user: { type: Object }
        };
    }

    firstUpdated() {
        this.loginForm = this.shadowRoot.getElementById('loginForm');
    }

    render() {
        return html`
            <h1>Login</h1>
            ${this.user
                ? html`<p>Ya has hecho login</p>`
                : this.loginFormTemplate
            }
        `;
    }

    get loginFormTemplate() {
        return html`
            <form id="loginForm">
                <p>
                    <dile-input 
                        label="Email" 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email" 
                        value="x@example.com"
                        hideErrorOnInput
                    ></dile-input>
                </p>
                <p>
                    <dile-input label="Clave" type="password" name="password" id="password" placeholder="Password" value="1234qwer"></dile-input>
                </p>
                <p>
                    <dile-checkbox name="remember">Remember me</dile-checkbox>
                </p>
                <div class="actions">
                    <p>
                        <dile-button @click=${this.loginHandler}>Login</dile-button>
                    </p>
                    <p>
                        <dile-remember-password></dile-remember-password>
                    </p>
                </div>
            </form>
        `;
    }

    loginHandler(e) {
        e.preventDefault();
        this.clearErrors();
        const formData = this.getData();
        console.log(formData);
        this.userLogin(formData);
    }
}
customElements.define('dile-page-login', DilePageLogin);
