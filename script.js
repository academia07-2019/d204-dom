let menuHamburguer = document.querySelector(".menu-hamburguer");
let nav = document.querySelector("nav");
let input = document.querySelector("input");
let botao = document.querySelector("button");
let h2 = document.querySelector("h2");

function mostrarMenu(){
    // nav.style.display = "block";
    //JEITO 1 
    // if(nav.classList.contains("visivel")){
    //     nav.classList.remove("visivel");
    // }else{
    //     nav.classList.add("visivel");  
    // }
    //JEITO 2
    // if(!nav.classList.contains("visivel")){
    //     nav.classList.add("visivel");  
    // }else{
    //     nav.classList.remove("visivel");
    // }
    //JEITO 3
    nav.classList.toggle("visivel");
    menuHamburguer.classList.toggle("ativo");
}



