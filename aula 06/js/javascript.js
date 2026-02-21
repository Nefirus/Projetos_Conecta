// ===== EFEITO DIGITAÇÃO =====

const texto = "Desenvolvedor Front-End";
let index = 0;
function digitar(){
const elemento = document.querySelector(".hero h2");
if(index < texto.length){
elemento.innerHTML += texto.charAt(index);
index++;
setTimeout(digitar, 80);
}

}
document.querySelector(".hero h2").innerHTML = "";
digitar();

// ===== ANIMAÇÃO AO SCROLL =====

const elementos = document.querySelectorAll("section");
function animarScroll(){
const topoTela = window.innerHeight * 0.85;
elementos.forEach(sec => {
const posicao = sec.getBoundingClientRect().top;
if(posicao < topoTela){
sec.style.opacity = "1";
sec.style.transform = "translateY(0px)";
}

});

}

window.addEventListener("scroll", animarScroll);

// ===== BOTÃO VOLTAR TOPO =====

const botaoTopo = document.createElement("button");
botaoTopo.innerHTML = "↑";
botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "10px 15px";
botaoTopo.style.fontSize = "20px";
botaoTopo.style.background = "#2563eb";
botaoTopo.style.color = "white";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "5px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
document.body.appendChild(botaoTopo);
window.addEventListener("scroll", () => {
if(window.scrollY > 300){
botaoTopo.style.display = "block";
}else{
botaoTopo.style.display = "none";
}

});

botaoTopo.addEventListener("click", () => {
window.scrollTo({
top:0,
behavior:"smooth"
});

});


// ===== MENU ATIVO =====

const links = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
let atual = "";
document.querySelectorAll("section").forEach(sec => {
const topo = window.scrollY;
const offset = sec.offsetTop - 200;
const altura = sec.offsetHeight;
if(topo >= offset && topo < offset + altura){
atual = sec.getAttribute("id");
}

});

links.forEach(link => {
link.style.color = "#38bdf8";
if(link.getAttribute("href") == "#" + atual){
link.style.color = "white";

}

});

});

