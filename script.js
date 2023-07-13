var calculo = '';
var valor1 = 0;
var valor2 = 0;

function Valores(valor){
  resultado = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML += valor
}

function Limpar(){
  
}

function Operadores(operador){
  calculo = operador
  valor1 = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = '' 
}

function Calcular(){
  valor2 = document.getElementById('resultado').innerHTML
  if(calculo == '+'){
    total = parseInt(valor1) + parseInt(valor2)
  }

  else if(calculo == '-'){
    total = parseInt(valor1) - parseInt(valor2)
  }

  else if(calculo == '/'){
    total = parseInt(valor1) / parseInt(valor2)
  }

  else if(calculo == '*'){
    total = parseInt(valor1) * parseInt(valor2)
  }

  else if(calculo == '%'){
    total = parseInt(valor1) % parseInt(valor2)
  }

  document.getElementById('resultado').innerHTML = total
}

function LimparC(){
  document.getElementById("resultado").innerHTML = ''
  valor1 = ''
  calculo = ''
}

function LimparCE(){
  resultado = document.getElementById("resultado").innerHTML

  resultadoArray = resultado.split("")

  console.log(resultadoArray)
}