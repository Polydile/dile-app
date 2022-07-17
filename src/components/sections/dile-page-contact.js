import { LitElement, html, css } from 'lit';

export class DilePageContact extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
    <p>Soy la página de contacto</p>
    `;
  }
}
customElements.define('dile-page-contact', DilePageContact);
