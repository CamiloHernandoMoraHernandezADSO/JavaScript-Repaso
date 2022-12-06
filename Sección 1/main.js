addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#formulario")
    let result = document.querySelector("#resultado")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let dataInput = Object.fromEntries(new FormData(e.target));
            console.log(dataInput)
            tarea = dataInput.tarea 
            hora = dataInput.hora
            result.insertAdjacentHTML("beforeend", `
            <tr>
                <td>
                ${tarea}
                </td>
                <td>
                ${hora}
                </td>
            </tr>
            `)
        })

    })