
var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
var segundoValor = parseInt(prompt("Digite o segundo valor:"))

var operacao = parseInt(prompt("Digite 1 para dividir, 2 para multiplicar, 3 para somar ou 4 para subtrair:"))

if (operacao == 1){ //if= se //else=senao
  var resultado = primeiroValor / segundoValor
  document.write("<h2>"+ primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 2){ //if= se //else=senao
  var resultado = primeiroValor * segundoValor
  document.write("<h2>"+ primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 3){ //if= se //else=senao
  var resultado = primeiroValor + segundoValor
  document.write("<h2>"+ primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 4){ //if= se //else=senao
  var resultado = primeiroValor - segundoValor
  document.write("<h2>"+ primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
} else {
  document.write("<h2>Opção inválida!</h2>")
}
