class Exchange {
    constructor(){
        this.form = document.querySelector(".exchange__content__form");
        this.input = document.querySelector(".amount-one");
        this.output = document.querySelector(".amount-two");
        this.firstCurrency = document.querySelector(".currency-one");
        this.secondCurrency = document.querySelector(".currency-two");
    }
    getData(currency, currency2){
        fetch(`https://api.exchangeratesapi.io/latest?base=${currency}`)
        .then((resp) => resp.json())
        .then(data => {
            const rate = data.rates[currency2];
            this.output.value = (this.input.value * rate).toFixed(2);
        })
        .catch((err) => console.log(err));
    }
    calculate(val, val2){
        this.getData(val, val2);
    }
    init(){
        this.firstCurrency.addEventListener('change',(e)=>{
            this.calculate(this.firstCurrency.value, this.secondCurrency.value)
        });
        this.secondCurrency.addEventListener('change', (e)=>{
            this.calculate(this.firstCurrency.value, this.secondCurrency.value)
        });
        this.input.addEventListener('input', (e)=>{
            this.calculate(this.firstCurrency.value, this.secondCurrency.value)
        });
    }
}

export default Exchange;