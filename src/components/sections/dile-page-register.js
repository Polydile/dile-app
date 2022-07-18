import { LitElement, html, css } from 'lit';
import { AuthMixin } from '../../lib/auth-mixin.js';

export class DilePageRegister extends AuthMixin(LitElement) {
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
            <form id="registerForm" @submit=${this.registerHandler}>
            <p>
                <label for="email">Name</label>
                <br>
                <input type="text" name="name" id="name" placeholder="Name" value="Smith">
            </p>
            <p>
                <label for="email">Email</label>
                <br>
                <input type="email" name="email" id="email_register" placeholder="Email" value="x@example.com">
            </p>
            <p>
                <label for="password">Password</label>
                <br>
                <input type="password" name="password" id="password_register" placeholder="Password" value="1234qwer">
            </p>
            <p>
                <label for="password_confirmation">Repeat password</label>
                <br>
                <input type="password" name="password_confirmation" id="password_confirmation" placeholder="Repeat the password" value="1234qwer">
            </p>
            <p>
                <input type="submit" value="Register">
            </p>
            </form>
        `;
    }

    registerHandler(e) {
        e.preventDefault();
        const formData = new FormData(this.registerForm);
        console.log(formData);
        this.userRegister(formData);
    }
}
customElements.define('dile-page-register', DilePageRegister);
