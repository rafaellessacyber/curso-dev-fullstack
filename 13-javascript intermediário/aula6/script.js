
let quadrado = document.querySelector('.quadrado')

function minhaFuncao(evento){
  console.log(evento.key)
}

//quadrado.onclick = minhaFuncao

//quadrado.onmousemove = minhaFuncao chama a função toda a vez que passa o mouse

//quadrado.onmouseenter = minhaFuncao toda a vez que se passa o mouse, ele printa a mensagem

//quadrado.onmouseout = minhaFuncao chama a função toda a vez que eu saio do quadrado 

//window.addEventListener('resize', minhaFuncao)

window.addEventListener('keypress', minhaFuncao)