console.log('hi')

//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>

const createACard = () =>{
    let card = document.createElement("div")
    card.className = "card"
    let text1 = document.createElement('h5')
    let test2 = document.createElement('p')
    text1.innerHTML = "h5 is here"
    test2.innerHTML = 'paragraph is here'
    card.appendChild(text1)
    card.appendChild(test2)
    var yo = document.getElementById("title")?.value
    console.log(yo)
    return card
}
console.log(createACard())
document.getElementById("cards")?.appendChild(createACard())
document.getElementById("cards")?.appendChild(createACard())
document.getElementById("cards")?.appendChild(createACard())
document.getElementById("cards")?.appendChild(createACard())
document.getElementById("cards")?.appendChild(createACard())