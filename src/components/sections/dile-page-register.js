import { LitElement, html, css } from 'lit';
import { AuthMixin } from '../../lib/auth-mixin.js';
import '@dile/dile-input/dile-input';
import '@dile/dile-button/dile-button';
import { DileFormMixin } from '@dile/dile-form-mixin';

export class DilePageRegister extends DileFormMixin(AuthMixin(LitElement)) {
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
        this.registerForm = this.shadowRoot.getElementById('registerForm');
    }

    render() {
        return html`
            <h1>Registro</h1>
            ${this.user
                ? html`<p>Ya tienes un usuario</p>`
                : this.registerFormTemplate
            }
        `;
    }

    get registerFormTemplate() {
        return html`
            <form id="registerForm">
            <p>
                <dile-input
                    label="Name"
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Name" 
                    value="Smith"
                ></dile-input>
            </p>
            <p>
                <dile-input
                    label="Email"
                    type="email" 
                    name="email" 
                    id="email_register" 
                    placeholder="Email" 
                    value="x@example.com"
                ></dile-input>
            </p>
            <p>
                <dile-input
                    label="Password"
                    type="password" 
                    name="password" 
                    id="password_register" 
                    placeholder="Password" 
                    value="1234qwer"
                ></dile-input>
            </p>
            <p>
                <dile-input
                    label="Repeat password"
                    type="password" 
                    name="password_confirmation" 
                    id="password_confirmation" 
                    placeholder="Repeat the password" 
                    value="1234qwer"
                ></dile-input>
            </p>
            <p>
                <dile-button @click=${this.registerHandler}>Register</dile-button>
            </p>
            </form>
        `;
    }

    registerHandler(e) {
        e.preventDefault();
        this.clearErrors();
        const formData = this.getData();
        console.log(formData);
        this.userRegister(formData);
    }
}
customElements.define('dile-page-register', DilePageRegister);
