import { css } from 'lit';

export const dileAppTheme = css`
  :host {
    --primary-color: #49e7af;
    --primary-light-color: #c2f9e6;
    --primary-dark-color: #2bb585;
    --primary-darker-color: #0b8c79;
    --secondary-color: #6a4a38;
    --secondary-light-color: #bba9a4;
    --secondary-dark-color: #412217;
    --primary-text-color: #303030;
    --secondary-text-color: #ffffff;

    --dile-nav-padding-y: 0;
    --dile-nav-padding-x: 0.5rem;
    --dile-nav-background-color: var(--primary-color);
    --dile-nav-color: var(--primary-text-color);
    --dile-nav-column-gap: 0.2rem;

    --dile-hamburger-color: var(--secondary-dark-color);
    --dile-hamburger-active-color: var(--secondary-dark-color);
    --dile-hamburger-line-size: 4px;
    --dile-hamburger-line-separation: -8px;
    --dile-hamburger-width: 28px;
    --dile-hamburger-padding-x: 0.4rem;

    --dile-app-drawer-background-color: var(--secondary-light-color);

    --dile-selector-icon-color: #303030;
    --dile-selector-selected-background-color: var(--primary-dark-color);
    --dile-selector-padding-y: 0.5rem;
    --dile-selector-icon-size: 1.75rem;

    --dile-input-border-color: var(--secondary-dark-color);
    --dile-input-border-width: 2px;

    --dile-button-border-width: 0px;
    --dile-button-background-color: var(--primary-darker-color);
    --dile-button-text-color: #fff;
    --dile-button-border-color: transparent;
    --dile-button-border-radius: 5px;
    --dile-button-text-transform: uppercase;
    --dile-button-font-weight: 300;
    --dile-button-hover-border-color: transparent;
    --dile-button-hover-background-color: #303030;
    --dile-button-hover-text-color: var(--primary-color);

    --dile-modal-close-icon-top: 0.75rem;
    --dile-modal-close-icon-color: var(--primary-dark-color);
  } 
`;