let toast = document.querySelector('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')

botaoCadastrar.onclick = function(){
  toast.classList.add('visible')

  //serve para remover a mensagem no tempo definido
  setTimeout(function(){
    toast.classList.remove('visible')
  }, 5000)
}