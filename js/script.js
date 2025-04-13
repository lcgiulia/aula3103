 function expressao(parametro){ // Cria uma função chamada expressao que recebe um valor como parâmetro (pode ser um número ou um símbolo como +, -, etc).
    //document.getElementById('display-calculadora').value += parametro;
    //traducao
    //document.getElementById('display-calculadora').value += parametro;
   let valor = document.getElementById('display-calculadora').value; // Pega o que já está escrito no input da calculadora (com o ID display-calculadora) e guarda dentro da variável valor.
   valor= valor+parametro; //  Junta (concatena) o valor antigo com o novo que o usuário clicou no botão da calculadora.
   document.getElementById('display-calculadora').value=valor; // Mostra o novo valor de volta na tela da calculadora (no input).
 }

 function calcular(){
    //eval()
    try { //controle se a execução deu certo
        let resultado = eval(document.getElementById('display-calculadora').value); //  Usa a função eval() para resolver a expressão matemática digitada. Ex: se estiver 2+2, ele transforma isso em 4.
// eval() é perigoso em projetos reais porque executa qualquer código JS, mas em calculadoras simples, pode ser usado com cuidado.
        document.getElementById('display-calculadora').value=resultado; // Mostra o resultado da conta no display da calculadora.
    } catch (error) {
        document.getElementById('display-calculadora').value="Expressão incorreta."; //  Se der algum erro (ex: usuário digita 2++2), ele mostra a mensagem "Expressão incorreta." em vez de travar tudo.
        
    }
 }

 function limpar(){ // Cria uma função chamada limpar, que apaga tudo
    document.getElementById('display-calculadora').value= ""; // deixa o campo vazio

 }
