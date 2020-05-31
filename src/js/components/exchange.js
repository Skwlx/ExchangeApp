class Exchange {
    constructor(){
        this.form = document.querySelector(".exchange__content__form");
        this.input = document.querySelector(".amount-one");
        this.output = document.querySelector(".amount-two");
        this.firstCurrency = document.querySelector(".currency-one");
        this.secondCurrency = document.querySelector(".currency-two");
        this.errorMessage = document.querySelector(".exchange__content__form__error-box__message");
        this.reverseButton = document.querySelector(".exchange__content__button");
        this.rateVal = document.querySelector(".rate");
    }
    getData(currency, currency2){
        fetch(`https://api.exchangeratesapi.io/latest?base=${currency}`)
        .then((resp) => resp.json())
        .then(data => {
            const rate = data.rates[currency2];
            this.rateVal.innerHTML = `1 ${currency} = ${rate.toFixed(3)} ${currency2}`;
            this.output.value = (this.input.value * rate).toFixed(2);
        })
        .catch((err) =>{
            this.errorMessage.textContent = "Couldn't connect to the server";
        });
    }
    reverse(){
        let tmp = this.input.value;
        this.input.value = this.output.value;
        this.output.value = tmp;
        tmp = 0;
        tmp = this.firstCurrency.value;
        this.firstCurrency.value = this.secondCurrency.value;
        this.secondCurrency.value = tmp;
        this.calculate(this.firstCurrency.value, this.secondCurrency.value);
    }
    calculate(val, val2){
        this.errorMessage.textContent = "";
        if(isNaN(this.input.value))
            this.errorMessage.textContent = "Inserted value isn't numeric";
        if(val == val2)
            this.errorMessage.textContent = "Currency are the same";
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
        this.reverseButton.addEventListener('click', (e)=>{
            this.reverse();
        })
    }
}

export default Exchange;