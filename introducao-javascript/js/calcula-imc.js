console.log("Olá mundo, JavaScript! ");
console.log(document);
//Caso queira pesquisar
/*
 * Como o javascript é interpretado, quando o código está no inicio
 * e chama um elemento que ainda não foi interpretado ele vai gerar
 * uma resposta nula
 */
 /*
console.log(document.querySelector("h1"));

var titulo = document.querySelector("h1");


titulo.textContent = "Banana";

console.log(titulo.textContent);

titulo.textContent = "Nutricionista Aparecida";
console.log(titulo.textContent);
*/


/* Recomendado criar classes para o javascript localizar,
*  no caso "." é uma classe
*/
var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

console.log("Carregado de arquivo externo");

console.log("------------------------------");

/*
var paciente1 = document.querySelector("#primeiro-paciente");

var tdPeso = paciente1.querySelector(".info-peso");
var tdAltura = paciente1.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoEhValido = true;
var alturaEhValido = true;

if(peso <= 0 || peso >= 200){
  imc1 = "Peso inválido";
  pesoEhValido = false;
}

if(altura <= 0 || altura >= 200){
  imc1 = "Altura inválido";
  alturaEhValido = false;
}

if(pesoEhValido && alturaEhValido){
  var imc1 = peso / (altura*altura);
}

paciente1.querySelector(".info-imc").textContent = imc1;

*/

//o querySelector só seleciona um elemento, para selecionar todos preisa do all
var pacientes = document.querySelectorAll(".paciente");

for(var i =  0; i < pacientes.length; i++){
  console.log(pacientes);


  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoEhValido = true;
  var alturaEhValido = true;

  if(peso <= 0 || peso >= 200){
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
    //paciente.style.backgroundColor = "lightcoral";(hardcode não é correto)
  }

  if(altura <= 0 || altura >= 200){
    alturaEhValido = false;
    tdImc.textContent = "Altura inválido";
    paciente.classList.add("paciente-invalido"); //vc lista as classes e adiciona no elemento
    //paciente.style.backgroundColor = "lightcoral";(hardcode não é correto)
  }

  if(pesoEhValido && alturaEhValido){
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }

}
/*
var tdPeso = paciente1.querySelector(".info-peso");
var tdAltura = paciente1.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoEhValido = true;
var alturaEhValido = true;

if(peso <= 0 || peso >= 200){
  imc1 = "Peso inválido";
  pesoEhValido = false;
}

if(altura <= 0 || altura >= 200){
  imc1 = "Altura inválido";
  alturaEhValido = false;
}

if(pesoEhValido && alturaEhValido){
  var imc1 = peso / (altura*altura);
}

paciente1.querySelector(".info-imc").textContent = imc1;

*/

console.log("-----------------------------------------");

function calculaImc(peso, altura){
    var imc = 0;
    var imc = peso / (altura*altura);

    return imc.toFixed(2);
}















//
