const bender = new Audio();
bender.src = "stuff/bender.mp3";

const probleminha = new Audio();
probleminha.src = "stuff/probleminha.mp3";

const bixao = new Audio()
bixao.src='stuff/bixao.mpeg'

const loco = new Audio()
loco.src='stuff/loco.mpeg'

const pedrin = new Audio()
pedrin.src='stuff/pedro.mp3'

const en = document.querySelector(".bender");
en.addEventListener("click", () => {
  bender.play();
});

const problema = document.querySelector(".probleminha");
problema.addEventListener("click", () => {
  probleminha.play();
});

const bixo = document.querySelector('.bixao')
bixo.addEventListener('click', ()=>{
  bixao.play();
})

const looko = document.querySelector('.loko')
looko.addEventListener('click', ()=>{
  loco.play()
})

const ped = document.querySelector('.pedrin');
ped.addEventListener('click', () =>{
  pedrin.play()
})