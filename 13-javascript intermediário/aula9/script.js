
let formulario = document.querySelector('#formCadastro')

//previne que o dados sejam enviados antes da validação
formulario.onsubmit = function(evento){
  evento.preventDefault()

  let inputNome = document.forms ['formCadastro'] ['nome']
  if(!inputNome.value){
    inputNome.classList.add('inputError')

    let span = inputNome.nextSibling.nextSibling
    span.innerText = 'Digite o nome corretamente'

  }else {
    inputNome.classList.remove('inputError')
    let span = inputNome.nextSibling.nextSibling
    span.innerText = ''
  }
}
