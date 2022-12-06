addEventListener("DOMContentLoaded", (e) => {

    let select = document.querySelector("#seleccion")
    let form = document.querySelector("#formulario")
    let result = document.querySelector("#resultado")
    let valor
    select.addEventListener("click", (e) => {
        let myinput = document.querySelector('input[id="grado"]');

        if (e.target.checked && e.target.value == "FAR") {
            myinput.placeholder = "Ingrese Fahrenheit";
        } else if (e.target.checked && e.target.value == "CEL") {
            myinput.placeholder = "Ingrese Celsius";
        }
    })
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let dataInput = Object.fromEntries(new FormData(e.target));
        console.log(dataInput)
        if(dataInput.grados == "FAR"){
            console.log(valor)
            valor = (dataInput.grado - 32) / 1.8 
            result.innerHTML = ""
            result.insertAdjacentHTML("beforeend", `
                <h1>${dataInput.grado + ' Fahrenheit son ' + valor + ' Celsius'}</h1>
            `)
        }
        else if(dataInput.grados == "CEL"){
            console.log(valor)
            valor = dataInput.grado * 1.8 + 32
            result.innerHTML = ""
            result.insertAdjacentHTML("beforeend", `
                <h1>${dataInput.grado + ' Celsius son ' + valor + ' Fahrenheit'}</h1>
            `)
        }
    })
})