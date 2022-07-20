import { css } from 'lit';

export const userMenuButtonStyles = css`
  .loginbutton {
    cursor: pointer;
    display: flex; 
    align-items: center;
    --dile-icon-size: 32px;
    --dile-icon-color: var(--secondary-dark-color);
    width: 100%;
  }
  .loginoverlay {
    --dile-menu-overlay-width: 200px;  
  }
  a.loginoption {
    display: block;
    padding: 20px 5px 20px 20px;
    text-decoration: none;
    text-transform: uppercase;
    color: #303030;
    font-weight: bold;
    transition: all 0.3s ease;
    background-color: var(--primary-light-color);
    border-radius: 2px;
    flex-grow: 1;
  }
  a.loginoption:visited {
    color: #303030;
  }
  a.loginoption:first-child {
    border-bottom: 1px solid #e6e6e6;
  }
  a.loginoption:hover {
    background-color: var(--primary-dark-color);
    color: #fff;
  }
`;