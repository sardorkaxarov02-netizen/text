// console.log(document)
const title = document.getElementById('title');
console.log(title.className)

const btn = document.getElementById('btn')


btn.onclick = () => {
    console.log('salom')
    title.className = 'changeclass'
}
const text = document.querySelector('.text')
console.log(text)

text.textContent = 'salom'

const obj = {
    id:1,
    name:"Jasur",
    surname: "Abdullayev"
}

obj.name = 'Mardonbek'

console.log(obj)