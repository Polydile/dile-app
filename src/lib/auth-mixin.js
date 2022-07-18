export const AuthMixin = (Superclass) => class extends Superclass {
  dispachCheckAuth() { 
    this.dispatchEvent(new CustomEvent('check-auth', { 
      bubbles: true,
      composed: true,
    }));
  }
}