import Exchange from "./components/exchange";
import "../sass/index.scss";

window.addEventListener('DOMContentLoaded', (event) => {
    let currency = new Exchange();
    currency.init();
});