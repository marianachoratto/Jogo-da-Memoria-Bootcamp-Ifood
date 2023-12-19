const emojis = [
    "👀",
    "👀",
    "❤",
    "❤",
    "🤣",
    "🤣",
    "😘",
    "😘",
    "😒",
    "😒",
    "😍",
    "😍",
    "🌹",
    "🌹",
    "😎",
    "😎",
]; 

let openCards = [];
let points = 0

function playSound(){
    let audio = new Audio("./src/audio/hit.m4a")
    audio.volume = 0.35
    audio.play()
}

//embaralhador de emojis 
let shuffleEmojis = emojis.sort(()=>(Math.random() > 0.5 ? 2 : -1))
//()=>{} ou ()=>() checar
//Você vai dar o peso de 2 ou -1 para as cartas. 2 a carta fica em cima, -1 ela vai para o final
// o método sort() embaralha as posições de um array, reescrevendo a lista.


// criar as cartas dinamicamente 
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffleEmojis[i];
    document.querySelector('.game').appendChild(box);

    box.onclick = handleClick;
}

//para comparar as cartas eu vou colocar as 2 na variável openCards
function handleClick(){
    if(openCards.length < 2){
        this.classList.add('boxOpen')
        //adiciona a classe boxOpen quando você clicar 
        openCards.push(this)
        //coloca dentro da variável openCards
    }

    if(openCards.length == 2){
        setTimeout(checkMath, 500 )
    }
}

// comparação das cartas
//Se as cartas forem iguais adiciona a class Match e elas ficam abertas. Se não, elas voltam ao normal
function checkMath(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add('boxMatch')
        openCards[1].classList.add('boxMatch')

        playSound()
        
        points++
        console.log(points)
        let pontuação = document.querySelector('#point')
        pontuação.innerHTML = `Pontuação: ${points}`

    } else {
        openCards[0].classList.remove('boxOpen')
        openCards[1].classList.remove('boxOpen')
    }

    openCards = []
    // se não na próxima rodada ele não funciona

    if(document.querySelectorAll('.boxMatch').length == emojis.length){
        alert('Parabéns! Você ganhou o jogo!')
    }
}
