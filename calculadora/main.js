let btnOscuro = document.querySelector(".btnOscuro");
let body = document.querySelector("body");
let btn = document.querySelectorAll("button");
let value =document.getElementById("value");
let letrasOscuro = document.getElementById("letras");
const form = document.querySelector("form");

console.log ("hola")
form.addEventListener("submit",function(event){
    event.preventDefault();
    
})
btnOscuro.onclick =function(){
    body.classList.toggle("oscuro");
    if(body.classList == "oscuro"){
        letrasOscuro.innerHTML="Modo Claro";
    }else{
        letrasOscuro.innerHTML="Modo Oscuro";
    }
   
}
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function(){

        if(this.innerHTML=="="){
            value.innerHTML= eval (value.innerHTML);   
        }else{
            if(this.innerHTML == "Borrar"){
                value.innerHTML="";
            }
         else{
            value.innerHTML+=this.innerHTML;
        }
        }
    })
    
}
