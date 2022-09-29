const random = 'https://api.quotable.io/random'
const show = document.getElementById("quotedisplay")
const input = document.getElementById("qouteinput")
const timer = document.getElementById("timer")
let correct = true;
input.addEventListener('input', () =>{
    const quoteShow = show.querySelectorAll('span')
const quoteInput = input.value.split('')
quoteShow.forEach((characterSpan, index)=>{
    const character = quoteInput[index]
    if(character == null){
characterSpan.classList.remove('correct')
characterSpan.classList.remove('incorrect')
correct = false;
    }else if(character === characterSpan.innerText){
        characterSpan.classList.add('correct')
        characterSpan.classList.remove('incorrect')
        correct = true;
   } else {
    characterSpan.classList.remove('correct')
    characterSpan.classList.add('incorrect')
    correct = false
}
})
if(correct) renderQuote();
})


function getRandomQuote(){
   return fetch(random)
    .then(response => response.json())
    .then(data => data.content)
}

async function renderQuote(){
    const quote = await getRandomQuote()
    show.innerHTML = ''
    quote.split('').forEach(character =>{
const characters = document.createElement('span')
characters.innerText = character;
show.appendChild(characters);
    })
    input.value = null;
    times();
}
let startTimes;
function times(){
    timer.textContent = 0;
    startTimes = new Date();
    setInterval(() => {
      timer.textContent =  getTimer()
    },1000)
}

function getTimer(){
    return Math.floor((new Date() - startTimes) / 1000)
}

renderQuote()
