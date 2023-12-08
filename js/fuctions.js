
const box = document.getElementById('container')
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

box.addEventListener('click',()=>{
    alert('has dado click en la caja principal')
})

number.forEach((e)=>{
    console.log(e)
})


