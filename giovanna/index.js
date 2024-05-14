function contarRegressivamente(){
    
    document.querySelector('button').disabled = true




    var num = document.getElementById('numero').value;

    num = parseInt(num);

    if(isNaN(num) || num < 0){

      document.getElementById('resultado').innerText = "Não é um número válido";
    }

  
  let intervalo = setInterval(function(){
    document.getElementById('resultado').innerText = num;

    if (num <= 0){
        clearInterval(intervalo);
        document.getElementById('resultado').innerText = "Tempo Esgotado!";
        document.querySelector('button').disabled = false

    }

    num--;

  },1000)

}