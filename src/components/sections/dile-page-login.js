import { LitElement, html, css } from 'lit';

export class DilePageLogin extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
            <p>
                Soy la página de login...
            </p>
            <button @click=${this.login}>Login</button>
        `;
    }

    login() {
        console.log('login', axios.defaults);
        
        // axios.get('https://jsonplaceholder.typicode.com/todos/1')
        // .then(res => {
        //     console.log(res.data);
        // });

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios
            .post('/login', {})
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
        });
    }
}
customElements.define('dile-page-login', DilePageLogin);
