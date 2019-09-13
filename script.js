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

function pegarNome(){
    let nome = input.value;
    h2.innerHTML = `Seja bem vind@ ${nome}`;
    input.value = "";
}

//funcao que recebe o próprio evento de pressionar teclas e verifica se a tecla do evento é o Enter, se for enter ele chama a funcao de pegar nome
let enterclick = (event) =>{
    if(event.key === 'Enter'){
        pegarNome();
    }
}

menuHamburguer.onclick = mostrarMenu;
botao.onclick = pegarNome;
input.onkeydown = enterclick; // coloquei o evento de apertar uma tecla no input que executa a funcao de enterclick

