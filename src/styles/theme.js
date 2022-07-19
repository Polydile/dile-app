import { css } from 'lit';

export const dileAppTheme = css`
  :host {
    --primary-color: #81d4fa;
    --primary-light-color: #b6ffff;
    --primary-dark-color: #4ba3c7;
    --primary-darker-color: #205283;
    --secondary-color: #5d4037;
    --secondary-light-color: #8b6b61;
    --secondary-dark-color: #321911;
    --primary-text-color: #303030;
    --secondary-text-color: #ffffff;

    --dile-nav-padding-y: 0;
    --dile-nav-background-color: var(--primary-color);
    --dile-nav-color: var(--primary-text-color);

    --dile-app-drawer-background-color: var(--primary-dark-color);

    --dile-selector-icon-color: #303030;

    --dile-input-border-color: var(--primary-darker-color);
    --dile-input-border-width: 2px;
    --dile-button-border-width: 2px;
    --dile-button-background-color: var(--primary-darker-color);
    --dile-button-text-color: #fff;
    --dile-button-border-color: #000;
    --dile-button-border-radius: 5px;
    --dile-button-text-transform: uppercase;
    --dile-button-font-weight: 300;
    --dile-button-hover-border-color: var(--primary-darker-color);
    --dile-button-hover-background-color: #303030;
    --dile-button-hover-text-color: var(--primary-color);
  } 
`;