const leftList = document.querySelectorAll('.first button')
const rigthList = document.querySelectorAll('.second button')
const input = document.getElementById('123')
const result = document.getElementById('item')

let bee = 'AZN'
let all = 'USD'
fetch(`https://api.exchangerate.host/latest?base=${bee}&symbols=${all}`)
.then(resp=> resp.json())
.then(data=> console.log(data.rates[all]))





leftList.forEach(item => {
    item.addEventListener("click", () => {
        leftList.forEach(e => {
            e.classList.remove('active')
        })
        item.classList.add('active')
        bee = item.innerText
        fetch(`https://api.exchangerate.host/latest?base=${bee}&symbols=${all}`)
        .then(resp=> resp.json())
.then(data=> {
    inval = Number(input.value)
    rates = data.rates[all]
    result.innerText = (inval*rates).toFixed(2)
       })
    })
})

rigthList.forEach(item => {
    item.addEventListener("click", () => {
        rigthList.forEach(e => {
            e.classList.remove('active')
        })
        item.classList.add('active')

        all = item.innerText
        fetch(`https://api.exchangerate.host/latest?base=${bee}&symbols=${all}`)
        .then(resp=> resp.json())
.then(data=> {
    inval = Number(input.value)
    rates = data.rates[all]
    result.innerText = (inval*rates).toFixed(2)
       })
    })
})