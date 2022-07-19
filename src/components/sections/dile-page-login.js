import { LitElement, html, css } from 'lit';
import { AuthMixin } from '../../lib/auth-mixin.js';
import '@dile/dile-input/dile-input';
import '@dile/dile-button/dile-button';
import {DileFormMixin} from '@dile/dile-form-mixin';

export class DilePageLogin extends DileFormMixin(AuthMixin(LitElement)) {
    static styles = [
        css`
            :host {
                display: block;
                padding: 0 0.6rem;
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
                    <dile-button @click=${this.loginHandler}>Login</dile-button>
                </p>
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
