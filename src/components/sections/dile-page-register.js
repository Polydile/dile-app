import { LitElement, html, css } from 'lit';

export class DilePageRegister extends LitElement {
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
                Soy la página de registro...
            </p>
        `;
    }
}
customElements.define('dile-page-register', DilePageRegister);
