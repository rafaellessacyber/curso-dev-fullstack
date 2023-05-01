//seletor por id
document.querySelector('#titulo').innerHTML = '<i>Exemplo</i>'

/*
seletor para tag
(seleciona somente a primeira ocorrência, ignorando as outra tags do html.)
*/
document.querySelector('a').innerText = '<b>teste ancora</b>'

/*
selecionando mais de 1 item por tag

forEach (é usado somente em arrays)
*/
let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){
  elemento.innerHTML = 'teste'
})//função anomina//callbacks

//selecionando mais de 1 item por classes
let count = 0
let boxes = document.querySelectorAll('.box')

boxes.forEach(function(box, index){
  count ++
  box.innerHTML = `caixas ` + (index + 1)
})
