import { LitElement, html, css } from 'lit';
import '@dile/dile-spinner/dile-spinner';

export class DilePageContact extends LitElement {
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
    <h1>Contact</h1>
    <p>We are the dile-components team. Contact us at contacto@escuela.it</p>
    `;
  }
}
customElements.define('dile-page-contact', DilePageContact);
