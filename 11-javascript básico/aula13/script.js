let clientes = [
  {
    nome: 'Rafael',
    idade: 34,
    linguagens:['javascript', 'python', 'php']
  },
  {
    nome: 'fulano',
    idade: 24,
    linguagens:['c#', 'c++', 'c']
  },
  {
    nome:'Ciclano',
    idade: 19,
    linguagens:['go', 'r', 'closure']
  }
]

let htmlClientes = ''

/*cliente é o meu array e clientes é o item do meu array. Visto que aonde o for percorre sem controle ao contador dele*/
for(let cliente of clientes){

  let listaLinguagens = ''

  for(let linguagem of cliente.linguagens){
    listaLinguagens += `<li>${linguagem}</li>`
  }

  htmlClientes += `
    <li>
      <b>nome:</b> ${cliente.nome} <br>
      <b>idade:</b> ${cliente.idade} <br>
      <b>linguagens:</b>
      <ul>
        ${listaLinguagens}
      </ul>
    </li>
  `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes