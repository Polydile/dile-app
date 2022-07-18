import { LitElement, html, css } from 'lit';
import { axios, csrf } from '../../lib/axios.js';
import { FeedbackMixin } from '../../lib/feedback-mixin.js';
import { AuthMixin } from '../../lib/auth-mixin.js';

export class DilePageLogin extends AuthMixin(FeedbackMixin(LitElement)) {
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
            <form id="loginForm" @submit=${this.login}>
                <p>
                    <label for="email">Email</label>
                    <br>
                    <input type="email" name="email" id="email" placeholder="Email" value="x@example.com">
                </p>
                <p>
                    <label for="password">Password</label>
                    <br>
                    <input type="password" name="password" id="password" placeholder="Password" value="1234qwer">
                </p>
                <p>
                    <input type="submit" id="loginButton" value="Login">
                </p>
            </form>
        `;
    }

    async login(e) {
        console.log('login', axios.defaults);
        e.preventDefault();
      
        await csrf();
        const formData = new FormData(this.loginForm);
        axios
            .post('/login', { email: formData.get('email'), password: formData.get('password') })
            .then(() => {
                this.positiveFeedback('login success');
                this.dispachCheckAuth();
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
                this.negativeFeedback(error.response.data.message);
            })
    }
}
customElements.define('dile-page-login', DilePageLogin);
