var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
   //event target (pega quem sofreu o evento)
    //event.target.remove();
/*    var alvoEvento = event.target;
    var paidoAlvo = alvoEvento.parentNode;
    paidoAlvo.remove();*/

    event.target.parentNode.classList.add("fadeOut");
    //espera um pouco
    setTimeout(function(){
      event.target.parentNode.remove();
    }, 500);

});
/*
pacientes.forEach(function(paciente){
  paciente.addEventListener("dbclick", function(){
    //quem acionou o evento vai sofrer a ação
    this.remove();
    console.log("fui clickado duas vezes");
  });
});
*/
