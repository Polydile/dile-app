import { LitElement, html, css } from 'lit';
import '@dile/dile-spinner/dile-spinner';

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
    <dile-spinner active></dile-spinner>
    `;
  }
}
customElements.define('dile-page-contact', DilePageContact);
