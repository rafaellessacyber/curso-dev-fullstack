
/*prompt é um recurso não mais usado no javascript, devido ao fato que uma caixinha irá se abrir para uma interação com o usuário. E também irá atribuir o valor para a variável
*/
/*let idade = prompt('Digite a sua idade')

//condicionais
if(idade >= 18) {
  document.write('Ok, você é maior de idade!')
  
//posso ter mais condicionais dentro do if
} else if (idade  === 15) {
  document.write('Você tem 15 anos!')
} else {
  document.write('Você não pode acessar')
}*/

let nome = prompt('Digite o seu nome')

if (nome === 'Rafael' || nome === 'rafael') {
  document.write(`Olá, ${nome}, seja bem vindo!`)
}else {
  document.write('Você não tem acesso de administrador!')
}