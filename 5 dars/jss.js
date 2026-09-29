 // api => bu backend va frontendni boglaydigan vosita 
 // methodlari
 // 1 -  GET => vazifasi backendan malumotlarni olib keladi
 // 2 -  POST => backendga malumotlarni yuborish
 // 3    DELETE => vazifasi malumotlarni ochirib yuborish  
 // 4    PUT => malumotlarni yangilaydi 
 // 5    PATCH => malumotlarni yangilaydi (qisman)


 // get 
 // https://jsonplaceholder.typicode.com/posts
 fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))