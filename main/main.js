
const targets = document.querySelectorAll("[data-target]");
const content = document.querySelectorAll("[data-content]");

targets.forEach(target => {
    

    target.addEventListener('click', ()  =>{

        content.forEach (c => {
            c.classList.remove("active");
        })

        const t= document.querySelector(target.dataset.target);
        t.classList.add('active'); 
        console.log("elvisajoso")
    })
}); 