
/*essa função poder retornar algo
function soma(num1, num2){
  return num1 + num2
}

/*
Ao chamar a função, percebe-se que necessita criar uma variável para receber esses valores, e assim para que os mesmo valores possam ser exibidos na tela

let resultado = soma(10, 5)

//exibi no console
console.log(resultado)

//exibi na tela
document.write(resultado)*/

function milhasEmKm(milhas){
  let km = milhas * 1.6

  return km
}

let resultado = milhasEmKm(150)

document.write(resultado)