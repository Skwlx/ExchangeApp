import Exchange from "./components/exchange";

window.addEventListener('DOMContentLoaded', (event) => {
    let currency = new Exchange();
    currency.init();
});