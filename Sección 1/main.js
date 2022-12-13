addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector('#form')
    let arr = 180
    let pech = 1 / 4
    let ceboajo = 1 / 4
    let pimen = 1 / 4
    let calpoll = 300

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target))
        let personas = Number(dataInput.personas)
        let arroz = arr * personas
        let pechuga = pech * personas
        let cebollayajo = ceboajo * personas
        let pimenton = pimen * personas
        let caldopollo = calpoll * personas



        let tabla = document.querySelector("tbody");
        tabla.insertAdjacentHTML("beforeend", `
                <tr>
                    <th>Ingredientes</th>
                    <th>Cantidad para ${personas} personas</th>
                    <th>Preparación</th>
                </tr> 
                <tr>
                    <td> Arroz </td>
                    <td> ${arroz} gr </td>
                    <td> 1. Coloca el aceite en una olla grande a fuego bajo. Sofríe los pimentones picados, el ajo y la cebolla cabezona y revuelve hasta que tomen un color doradito.</td>
                </tr>
                <tr>
                <td> Pechuga </td>
                <td> ${pechuga} </td>
                <td> 2. Agrega las 3 tazas de arroz, lo importante es revolver muy bien</td>
                </tr>
                <tr>
                <td> Cebolla </td>
                <td> ${cebollayajo} </td>
                <td> 3. Añade las 5 tazas de agua, las pechugas de pollo, el cubo de caldo de pollo, el sobre de sazón y la sal al gusto. Revuelve y deja cocinar a fuego medio por aproximadamente 15 minutos o hasta que se seque el arroz.</td>
                </tr>
                <tr>
                <td> Pimenton </td>
                <td> ${pimenton} </td>
                <td> Al estar ahi coje el sabor que soltó la pechuga y las verduras </td>
                </tr>
                <tr>
                <td> Caldo de pollo </td> 
                <td> ${caldopollo} </td>
                <td> 5. Una vez que el arroz haya absorbido toda el agua tapa la olla y cocina a fuego bajo por 10 a 15 minutos más hasta que el arroz esté suave. Y a disfrutar</td>
                </tr>
                `)

    })

})  