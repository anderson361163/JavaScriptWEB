console.log("------------------------------");
/*
/*
 * Você pode criar um escutador de eventos
 * (ações do usuário a um elemento da arvore DOM)
 * e atrelar a ele funções para serem executadas
 * assim que ocorrer o evento.
*/

titulo.addEventListener("click", mostrarMensagem);

function mostrarMensagem(){
    console.log("Eu fui clicado");
}


/*
 * Você pode adicionar um escutador de eventos
 * (ações do usuário a um elemento da arvore DOM)
 * e atrelar a ele funções para serem executadas
 * assim que ocorrer o evento, sendo elas nomeadas
 * anonimas (existentes apenas naquele evento).
*/

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){

    /*
      Como os botões de submit tem comportamentos padrão
      de enviar e limpar o form, para evitar que isso ocorra
      precisamos invocar uma função que chama este comportamento
      padrão paralisa a execução dele
    */
    event.preventDefault();

    console.log("Eu fui clicado");

    //Aqui ele pega todos os elementos do elemento FORM
    var form = document.querySelector("#form-adiciona");
    /*
     * Captura os valores de cada elemento dos inputs do form,
     * usando o "name" como identificador
     */
    /*
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    */

    var paciente = obtemPacienteDoFormulario(form);


    /*--------------NÃO CONCORDO COM ESTE FORMATO DE CÓDIGO-------------------*/
    var erros = validaPaciente(paciente);

    if (erros.length > 0){
       exibeMensagemErro(erros);
       return;
   }
    /*--------------NÃO CONCORDO COM ESTE FORMATO DE CÓDIGO-------------------*/

    adicionaPacienteNaTabela(paciente);


    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});


function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    //pega o elemento da tabela e adiciona como filhos o tr que está dentro do JavaScript
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


function exibeMensagemErro(erros){


    var ul = document.querySelector("#mensagens-erro");

    ul.innetHTML = "";

    erros.forEach(function(erro) {
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
    });


    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.textContent = erros

}


function obtemPacienteDoFormulario(form){

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

 //Cada form é um Objeto javascript que possui propriedade

/*
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;
*/
  return paciente;
}

function montaTr(paciente){
  //Cria um elemento chamado tr (coluna de uma tabela) no mundo javascript
  var pacienteTr = document.createElement("tr");

 /*
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");
  */

  //adiciona nos TD as informações do form

/*
  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;
*/
/*

  var nomeTd = montaTd(paciente.nome, "info-nome");
  var pesoTd = montaTd(paciente.peso, "info-peso");
  var alturaTd = montaTd(paciente.altura, "info-altura");
  var gorduraTd = montaTd(paciente.gordura, "info-gordura");
  var imcTd = montaTd(paciente.imc, "info-imc");
*/
  //Adiciona como elementos filhas os TRs criados
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


  return pacienteTr;
}

//Cria um elemento chamado td (coluna de uma tabela) no mundo javascript
function mostaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
}

function validaPaciente(paciente){

    var erros = [];

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}
