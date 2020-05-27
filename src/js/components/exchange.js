class Exchange {
    constructor(){
        this.form = document.querySelector("exchange__content__form");
    }
    getData(){
        fetch('https://api.exchangeratesapi.io/latest')
        .then((resp) => resp.json())
        .then((data) => console.log(data));
    }
    init(){
        this.getData();
    }
}

export default Exchange;