//para adicionar uma classe nele
let menuMobile = document.querySelector('.menuMobile')

//variavel para alterar o texto
let botaoMenu = document.querySelector('.botaoMenu')

let aberto = false //pois o menu ta fechado
function abrirOuFecharMenu(){

  if(aberto === true){
    aberto = false //variável de controle
    menuMobile.classList.remove('aberto')
    botaoMenu.innerText = 'abrir menu'
  } else if(aberto === false){
    aberto = true
    menuMobile.classList.add('aberto')
    botaoMenu.innerText = 'fechar menu'
  }
  
}

