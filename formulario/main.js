let cedula = document.getElementById("cedula");
let nombre = document.getElementById("nombre");
let apellidoPaterno = document.getElementById("apellidoPaterno");
let apellidoMaterno = document.getElementById("apellidoMaterno");


let form= document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
})

console.log("hola")




function Guardar(){
    console.log("CEDULA: "+cedula.value);
    console.log("NOMBRE: "+nombre.value);
    console.log("APELLIDO PATERNO: "+apellidoPaterno.value);
    console.log("APELLIDO MATERNO: "+apellidoMaterno.value);
}
