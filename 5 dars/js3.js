const input = document.getElementById('input');
const btn = document.getElementById('btn')
const title = document.getElementById('title')

btn.onclick = () => {
  console.log(input.value)
}

input.oninput = (e) => {
  console.log(e.target.value)
  title.textContent = e.target.value
}

document.addEventListener('keydown',(keys)=>{
  if(keys.key=='j'){
    title.textContent = " j harifi bosildi yangi element qoshildi"
  }
})
const arr = [
  { 
    id:1,
    name:"Jasur"
  },
]

// arr.push({id:2, name:"madina"})

console.log(arr)

input.oninput = (e) => {
  console.log(arr)
    arr.push({id:2, name:"madina"})
    console.log(e.target.value)
  title.textContent = e.target.value
}
btn.onclick = () => {
  console.log(arr)
  arr.push({id:2, name:"madina"})
}
document.addEventListener('keydown',(keys)=>{
  if(keys.key=='j'){
    console.log(arr)
    arr.push({id:2, name:"madina"})
  }
})