// const title = document.querySelector('.title');
// const obj = {
//     id:1,
//     matn :"salom men dasturchiman"
// }
// obj.matn= 'Jamshidhon'

// title.textContent = `test ${obj.id} ${obj.matn}`
// const numbers = [2,3,"salom",2{id:1, ism:"Jasurbek"},4,5,'salom']
// numbers.map( (item) => {
//     console.log(item)
// })

// js bilan html element yaratish

const H1 = document.createElement('h1');
 H1.textContent = 'salom'

 document.body.append(H1)
console.log(H1)


const students = [
    {
        id:1,
        name:"bilolhon",
        yoshi:13
    },
    {
        id:2,
        name:"tohirjon",
        yoshi:13
    },
    {
        id:3,
        name:"Hasanboy",
        yoshi:15
    },
    {
        id:4,
        name:"Sardorbek",
        yoshi:16
    },
        {
        id:5,
        name:"Madina",
        yoshi:22
    },
]


// const firselement = students[0]
// console.log(firselement.name)

students.map((item )=>{

    const H1 = document.createElement('h1');
    H1.textContent = `${item.id} - ${item.name} yoshi - ${item.yoshi}`
// H1.textContent = 'salom'
document.body.append(H1)

})

