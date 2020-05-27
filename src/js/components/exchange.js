class Exchange {
    constructor(){
        this.form = document.querySelector(".exchange__content__form");
        this.input = document.querySelector(".exchange__content__form-input");
        this.select = document.querySelectorAll(".exchange__content__form-data");
    }
    getData(){
        fetch('https://api.exchangeratesapi.io/latest')
        .then((resp) => resp.json())
        .then((data) => {return data})
        .catch((err) => console.log(err));
        return result;
    }
    // displayData(data){
    //     for (let [key] of Object.entries(data.rates)) {
    //         let optionBox = document.createElement("option");
    //         let optionBox2 = document.createElement("option");
    //         optionBox.textContent = key;
    //         optionBox2.textContent = key;
    //         optionBox.value = key;
    //         optionBox2.value = key;
    //         this.select[0].appendChild(optionBox);
    //         this.select[1].appendChild(optionBox2);
    //       }
    // }
    calculate(data){

    }
    init(){
        this.displayData(this.getData());
    }
}

export default Exchange;