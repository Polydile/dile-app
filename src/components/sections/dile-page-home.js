import { LitElement, html, css } from 'lit';

export class DilePageHome extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
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
