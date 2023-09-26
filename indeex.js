const cardsArray=[
    {
        name:'fries',
        img:'fries.png'
    },
    {
        name:'cheeseburger',
        img:'cheeseburger.png'
    },
    {
        name:'ice-cream',
        img:'ice-cream.png'
    },
    {
        name:'pizza',
        img:'pizza.png'
    },
    {
        name:'milkshake',
        img:'milkshake.png'
    },
    {
        name:'hotdog',
        img:'hotdog.png'
    },
    {
        name:'fries',
        img:'fries.png'
    },
    {
        name:'cheeseburger',
        img:'cheeseburger.png'
    },
    {
        name:'ice-cream',
        img:'ice-cream.png'
    },
    {
        name:'pizza',
        img:'pizza.png'
    },
    {
        name:'milkshake',
        img:'milkshake.png'
    },
    {
        name:'hotdog',
        img:'hotdog.png'
    },

]

cardsArray.sort(() => 0.5 - Math.random())
console.log(cardsArray)

const grid=document.querySelector('.grid')
const resultDisplay=document.querySelector('#result')
let cardsChoosen=[]
let cardsChoosenIds=[]
let cardsWon=[]

function createBoard(){
    for(let i=0; i< cardsArray.length; i++){
      const card=document.createElement('img')  
      card.setAttribute('src','blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
}


function flipcard(){
   let cardId=this.getAttribute('data-id')
   cardsChoosen.push(cardsArray[cardId].name)
   cardsChoosenIds.push(cardId)
   this.setAttribute('src',cardsArray[cardId].img)
   if(cardsChoosen.length === 2){
    setTimeout(checkForMatch,500)
   }
console.log(cardsChoosenIds)
}

function checkForMatch(){
    const cards= document.querySelectorAll('img')
    const optionOneId=cardsChoosenIds[0]
    const optionTwoId=cardsChoosenIds[1]

if(optionOneId== optionTwoId){
    alert('you have clicked the same image!')
cards[optionOneId].setAttribute('src', 'blank.png')
cards[optionTwoId].setAttribute('src', 'blank.png')
}else if(cardsChoosen[0]===cardsChoosen[1]){
alert('you have found a match!')
cards[optionOneId].setAttribute('src', 'white.png')
cards[optionTwoId].setAttribute('src', 'white.png')
cards[optionOneId].removeEventListener('clicks',flipcard)
cardsWon.push(cardsChoosen)
}else {
    cards[optionOneId].setAttribute('src', 'blank.png')
    cards[optionTwoId].setAttribute('src', 'blank.png') 
    alert('sorry start AGAIN!')
}
cardsChoosen=[]
cardsChoosenIds=[]
resultDisplay.innerHTML=cardsWon.length
if(cardsWon.length===cardsArray.length/2){
    resultDisplay.innerHTML='congratulations you have Won!🎉🎉'
}

console.log(cardsWon)
console.log(cardsChoosen)
}

createBoard()