

let contador = document.querySelector('#contador')
let count = 0

//executa o intervalo a cada x tempo
let intervalo = setInterval(function(){
  count++
  contador.innerText = count
}, 1)

let botaoPausar = document.querySelector('#botaoPausar')
botaoPausar.onclick = function(){
  clearInterval(intervalo)
}