import { LitElement, html, css } from 'lit';
import '@dile/dile-menu-overlay/dile-menu-overlay';
import '@dile/dile-icon/dile-icon';
import { arrowDropDownIcon } from '@dile/icons';

export class DileUserControl extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        --dile-icon-size: 1.5rem;
        --dile-icon-color: #000;
      }
      .user-name {
        display: flex;
        align-items: center;
      }
      .content {
        padding: 1rem;
      }
    `
  ];

  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render() {
    return html`
      <dile-menu-overlay>
        <span slot="trigger" class="user-name">
          <b>${this.user.name}</b>
          <dile-icon .icon="${arrowDropDownIcon}"></dile-icon>
        </span>
        <div slot="content" class="content">
          <a href="#" @click="${this.dispatchLogout}">logout</a>
        </div>
      </dile-menu-overlay>
    `;
  }

  dispatchLogout(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('logout'));
  }
}
customElements.define('dile-user-control', DileUserControl);
