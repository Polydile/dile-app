import { LitElement, html, css } from 'lit';

export class DilePageHome extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                padding: 0.6rem;
            }
        `
    ];

    render() {
        return html`
            <p>Soy la página Home</p>
        `;
    }
}
customElements.define('dile-page-home', DilePageHome);
