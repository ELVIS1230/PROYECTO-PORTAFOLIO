const targets = document.querySelectorAll("[data-target]");
const content = document.querySelectorAll("[data-content]");
const ventana= document.getElementById("ventana");
const btnCerrarModal = document.getElementById("cerrar-modal");
const form = document.querySelector("form");

const labelFrases = document.getElementById("contenedor-frases")
let frases = [' "No se trata de donde vienes, si no a donde vas." </br></br> Ella Fitzgerald. ',
            ' "Los sabios son los que buscan la sabiduría; los necios piensan ya haberla encontrado."</br></br> Napoleón Bonaparte. ',
             ' "Aprender sin reflexionar es una ocupación inútil."</br></br> Confucio ']
const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

labelFrases.innerHTML=fraseAleatoria

ventana.showModal()

btnCerrarModal.addEventListener("click", () => {
    ventana.close();
})

targets.forEach(target => {
    
    target.addEventListener('click', ()  =>{

        content.forEach (c => {
            c.classList.remove("active");
            target.classList.remove("active")
        })
        
        const t = document.querySelector(target.dataset.target);
        t.classList.add('active'); 
        console.log("elvisajoso")
      
    })
}); 
form.addEventListener("submit", e => {
    e.preventDefault()
    
})


function ValidarCorreo(email){

    var expRegular = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido= expRegular.test(email);
    
    if(esValido == true){
        console.log("Correo Valido")
        alert("Registro guardado con exito")
    } else {
        console.log("No Valido")
    }
}

