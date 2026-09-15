const title = document.querySelector(".title")
const btn = document.getElementById("btn")
const light = document.getElementById("light")
const dark = document.getElementById("dark")
const dizayn = document.getElementById("dizayn")

btn.onclick = () => {
    title.textContent = "Tugma bosildi"
    btn.classList = "btn"
    console.log(btn)
}

title.setAttribute('class','yangi class') //bu elementlar yangi artribut (class, id) qoshibberadi
title.setAttribute('id','yaniid')

title.removeAttribute('class') //bu atributlarni olib tashlab beradi

//console.log(title)

dizayn.onclick = () => {
    document.body.style.background = 'red'
}


light.onclick = () => {
    document.body.style.background = 'black'
}
dark.onclick = () => {
    document.body.style.background = 'white'
}