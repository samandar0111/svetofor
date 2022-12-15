// const title = document.getElementById('title')
// const body = document.body
// let count = 3
// const idinterval = setInterval(() => {
//   title.textContent = count
//   count -=1
// }, 1000);
// setTimeout(() => {
//   clearInterval(idinterval);
//   body.style.backgroundColor = 'red'
// },count * 1000);


const qizil = document.querySelector('#lamp1')
const sariq = document.querySelector('#lamp2')
const yashil = document.querySelector('#lamp3')

let count = 10

let idinterval = setInterval(() => {
  if(count == 10){
    qizil.style.background = 'red'
  }else if(count == 8){
    qizil.style.background = '#000'
  }else if(count == 7.5){
    qizil.style.background = 'red'
  }else if(count == 7){
    qizil.style.background = '#000'
  }else if(count == 6.5){
    qizil.style.background = 'red'
  }else if(count == 6){
    qizil.style.background = '#000'
    sariq.style.background = 'yellow'
  }else if(count == 4 ){
    sariq.style.background = '#000'
    yashil.style.background = 'green'
  }else if(count == 2){
    yashil.style.background = '#000'
  }else if(count == 1.5){
    yashil.style.background = 'green'
  }else if(count == 1){
    yashil.style.background = '#000'
  }else if(count == 0.5){
    yashil.style.background = 'green'
  }else if(count == 0){
    yashil.style.background = '#000'
    sariq.style.background = 'yellow'
  }else if(count == -2){
    qizil.style.background = 'red'
    sariq.style.background = '#000'
    count = 10
  }
  count -= 0.5
}, 500);




