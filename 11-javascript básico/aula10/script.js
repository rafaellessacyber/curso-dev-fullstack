/*
  Alguns cuidados com o prompt aos quais são: ele traz
  resultados em string e precisam serem convertidos em valores para a execução do cálculo correspondente.
*/
let InputNota1 = prompt('Digite a sua primeira nota')

let InputNota2 = prompt('Digite a sua segunda nota')

//É o valor que eu quero transformar em número
let nota1 = parseInt(InputNota1)

let nota2 = parseInt(InputNota2)

let mediaMinima = 7

media = (nota1 + nota2) / 2

if (media >=mediaMinima) {
  document.write('Ok, passou de ano!')
} else if(media < mediaMinima){
  document.write('Ops, não passou de ano!')
}

document.write('<br>')

if(media >= mediaMinima && media === 10) {
  document.write('NOSSA! Você foi muito bom, continue assim!')
}else if (media >= mediaMinima && media === 9 ) {
  document.write('Parabéns! Mas poderia ser esforçar um pouquinho mais!')
}

document.write('<br>')

if (media <= mediaMinima && media === 7) {
  document.write('Parabéns! Você ficou dentro da média')
}else if(media <= mediaMinima && media === 3) { 
  document.write('Você ficou muito abaixo da média mínima. Por favor, tente mais tarde!')
}
