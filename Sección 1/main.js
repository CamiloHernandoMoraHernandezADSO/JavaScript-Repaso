addEventListener("DOMContentLoaded", (e) => {

    let select = document.querySelector("#seleccion")
    let form = document.querySelector("#formulario")
    let result = document.querySelector("#resultado")
    let valor
    select.addEventListener("click", (e) => {
        let myinput = document.querySelector('input[id="moneda"]');

        if (e.target.checked && e.target.value == "USD") {
            myinput.placeholder = "Ingrese dólares";
        } else if (e.target.checked && e.target.value == "COP") {
            myinput.placeholder = "Ingrese pesos colombianos";
        }
    })
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let dataInput = Object.fromEntries(new FormData(e.target));
        console.log(dataInput)
        if(dataInput.monedas == "USD"){
            console.log(valor)
            valor = dataInput.moneda * 48822
            result.innerHTML = ""
            result.insertAdjacentHTML("beforeend", `
                <h1>${dataInput.moneda + ' USD son ' + valor + ' COP'}</h1>
            `)
        }
        else if(dataInput.monedas == "COP"){
            console.log(valor)
            valor = dataInput.moneda / 48822
            result.innerHTML = ""
            result.insertAdjacentHTML("beforeend", `
                <h1>${dataInput.moneda + ' COP son ' + valor + ' USD'}</h1>
            `)
        }
    })
})