//User will select a character from a dropdown menu, i chose to use a set of finite choices because user can easily cause errors from mispelling, or entering a character that isn't in the database
//On the click of a button, user will see the character's name, anime their from, and quotes from their series
//Extra credit: User will also see an image of the character
//API link: https://animechan.vercel.app/api/quotes/character?name=saitama

//const choice = document.querySelectorAll('option:checked')
//assign selected choice to a variable, in a dropdown menu, target the select tag first, then use option:checked




document.querySelector('button').addEventListener('click', getQuote)

function getQuote(){
   
    const choice = document.querySelector('select')
const selected = choice.value
const text = document.querySelectorAll('#hidden')

text.forEach(e => e.style.display = 'block')


    
    const url = `https://animechan.vercel.app/api/quotes/character?name=${selected}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //show anime name on the DOM
            document.querySelector('.anime-text').innerHTML = data["0"].anime
           
            document.querySelector('.character-text').innerHTML = data["0"].character
            
            const list = document.querySelector('ul')
            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
              }
            data.forEach(obj => {
                const li = document.createElement('li')
                li.innerHTML = obj.quote
                list.appendChild(li)
            })
           /* data.abilities.forEach(obj => {
                const pLi = document.createElement('li')
                pLi.innerHTML = obj.ability.name.charAt(0).toUpperCase() + obj.ability.name.slice(1)
                pList.appendChild(pLi)})
                */
        })
        .catch(err => {
            console.log(`Not found ${err}`)
        })




}