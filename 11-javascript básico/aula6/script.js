/*
  Alguns tipos de dados:

  string
  number
  boolean
  array
  object
  underfined
  null

*/

//string
let nome = 'Rafael'
console.log(nome)

//string - concatenada
let sobrenome = 'Lessa'
//console.log(nome + ' ' + sobrenome) primeira maneira aplicada para concatenar

//string - literal
console.log(`${nome} ${sobrenome}`)

//number
let idade =  34
console.log(idade)
console.log(idade + 10)

//number - float
let porcentagem = 10.2
console.log(porcentagem + '%' )

//boolean (true ou false)
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)

//array (pode ser várias caixinhas que podem ser guardadas)
let habilidades = ['Javascript', 'PHP', 'Python']
console.log(habilidades)
console.log(habilidades.length)//traz quantos itens eu tenho dentro do array
console.log(habilidades[1])//acessa somente 1 único item da posição desejada

//object (um tipo de array mais flexivel)
let pessoa = {
  nome: 'Fulano',
  sobrenome: 'da Silva',
  idade: '25',
  habilidades:['c++', 'c#', 'python']
}
console.log(pessoa.nome)
 console.log(pessoa.habilidades[0])

 //underfined
 let endereco
 console.log(endereco)

 //null
 let cidade = null
 console.log(cidade)