import { LitElement, html, css } from 'lit';

export class DilePageLogin extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
            <p>
                Soy la página de login...
            </p>
        `;
    }
}
customElements.define('dile-page-login', DilePageLogin);
