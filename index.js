function calcular(){
    
    document.querySelector('button').disabled = true

    var direct = document.getElementById('Direct').value;
    var story = document.getElementById('Story').value;
    var coment = document.getElementById('Comentarios').value;
    var sent = document.getElementById('Compartilhamentos').value;
    var saves = document.getElementById('Salvamentos').value;
    var likes = document.getElementById('Curtidas').value;
    var follow = document.getElementById('Seguidores').value;

    direct = parseInt(direct);
    story = parseInt(story);
    coment = parseInt(coment);
    sent = parseInt(sent);
    saves = parseInt(saves);
    likes = parseInt(likes);
    follow = parseInt(follow);



    // if(isNaN(direct, story, coment, sent, saves, likes, follow)){

    //   document.getElementById('resultado').innerText = "Não é um número válido";
    // }

    // var engajamento = (direct*6)+ (story*5)+(coment*4)+(sent*3)+(sent*2)+likes
    var engajamento = (direct*6+story*5+coment*4+sent*3+sent*2+likes)/follow*100
    if(engajamento>10){
        document.getElementById('resultado').innerText = `${engajamento}% - Engajamento acima da média`;
        document.querySelector('button').disabled = false
    }
    else if(engajamento>5 && engajamento<10){
        document.getElementById('resultado').innerText = `${engajamento}% - Engajamento bom`;
        document.querySelector('button').disabled = false
    }
    else{
        document.getElementById('resultado').innerText = `${engajamento}% - Bem ruim`;
        document.querySelector('button').disabled = false
    }




    // document.getElementById('resultado').innerText = `${engajamento}%`;


  
//     let intervalo = setInterval(function(){
//     document.getElementById('resultado').innerText = num;

//     if (num <= 0){
//         clearInterval(intervalo);
//         document.getElementById('resultado').innerText = "Tempo Esgotado!";
//         document.querySelector('button').disabled = false

//     }

//     num--;

//   },1000)

}