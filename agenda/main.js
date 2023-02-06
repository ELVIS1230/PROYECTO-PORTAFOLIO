const btnAbrirFormulario = document.querySelector("#mostrar-formulario");
const btnCerrarFormulario = document.querySelector("#cerrar-formulario");
const ventanaEmergente = document.querySelector("#ventana-emergente");
const formulario = document.querySelector("#formulario");
const btnMostrarDatos = document.querySelector("#btn-mostrar-datos");
const ul= document.querySelector("ul");
const form = document.querySelector("#form");

//declaración para guardar el formulario//
const titulo = document.querySelector('.titulo-de-evento')
const fInicio = document.querySelector('.fecha-inicio')
const fFin = document.querySelector('.fecha-fin')
const prioridad = document.querySelector("#prioridad")
const estado = document.querySelector("#estado")
const descripcion = document.querySelector("#descripcion")
const btnAgregarTarea = document.querySelector("#btn-agregar-tarea")
////

btnAbrirFormulario.addEventListener("click", () => {
    ventanaEmergente.showModal();
});

btnCerrarFormulario.addEventListener("click", () => {
    ventanaEmergente.close();
})


function insertarFila(){
    
}

//guardar formulario dando click
const svr = window.localStorage

btnAgregarTarea.onclick = () => {
    let evento = {
        id: Math.random(1,100),
        titulo: titulo.value,
        prioridad: prioridad.value,
        fInicio: fInicio.value,
        fFin: fFin.value,
        estado: estado.value,
        descripcion: descripcion.value,
    }
    console.log(evento);
    let tblDatos = document.getElementById("tblDatos").insertRow(-1);
    let col1 = tblDatos.insertCell(0);
    let col2 = tblDatos.insertCell(1);
    let col3 = tblDatos.insertCell(2);
    let col4 = tblDatos.insertCell(3);
    let col5 = tblDatos.insertCell(4);
    let col6 = tblDatos.insertCell(5);

    col1.innerHTML = titulo.value;
    col2.innerHTML = prioridad.value;
    col3.innerHTML = estado.value;
    col4.innerHTML = fInicio.value;
    col5.innerHTML = fFin.value;
    col6.innerHTML = descripcion.value;

    form.reset();
    ventanaEmergente.close();
    

}













