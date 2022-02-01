const userCardTemplate = document.querySelector("[data-user-template]");
const userCardsContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
const results = document.querySelector(".results");
////append a child to users later.
let users = [];


searchInput.addEventListener("input", e =>{
    const value = e.target.value.toLowerCase()
    let minus = 0
    let total = 0
    users.forEach(user => {
        const isVisible = 
        user.name.toLowerCase().substring(0, value.length) === value || 
        user.email.toLowerCase().substring(0, value.length) === value
        user.element.classList.toggle("hide", !isVisible)  
        if(!isVisible){
            minus++;
        }
    })
    total = users.length - minus
    results.innerText = "Total Users Displayed: " + total;
})

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        users = data.map(user =>{
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            header.textContent = user.name
            body.textContent = user.email
            userCardsContainer.append(card)
            return{name: user.name, email: user.email, element:card}
        })
        results.innerText = "Total Users Displayed: " + document.querySelectorAll(".card").length;
    })

    

    /////Make this into a pokedex?
    ////Add a link to full history of pokemon?