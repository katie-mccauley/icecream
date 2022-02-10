let budget = 40

const iceCream = [
  { id: 1, type: "ice cream", name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1 },
  { id: 2, type: "ice cream", name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1 },
  { id: 3, type: "ice cream", name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2 }]


const vessels = [
  { id: 4, type: "vessels", name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2 },
  { id: 5, type: "vessels", name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4 }]

const toppings = [
  { id: 6, type: "toppings", name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1 },
  { id: 7, type: "toppings", name: 'Chocolate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2 }]


// function iceCreamDraw() {
//   let template = ""
//   iceCream.forEach(i => {
//     template += `
//     <div class="col-3 ice-cream bg-info" id="iceMenu" onlick="checkoutIce('ice-cream')">
//       <img class="img-fluid" src="${i.image}" alt="">
//       <div class="d-flex justify-content-between p-3">
//         <h5>${i.name}</h5>
//         <p>${i.price}</p>
//       </div>

//     </div>
//     `
//   })


//   document.getElementById("iceCream").innerHTML = template

// }

// function vesselDraw() {
//   let template = ""
//   vessels.forEach(v => {
//     template += `
//     <div class="col-3 ice-cream bg-info" id="iceMenu" onlick="checkoutIce('ice-cream')">
//       <img class="img-fluid" src="${v.image}" alt="">
//       <div class="d-flex justify-content-between p-3">
//         <h5>${v.name}</h5>
//         <p>${v.price}</p>
//       </div>

//     </div>

//     `
//   })
//   document.getElementById("vessel").innerHTML = template
// }


let basket = []
let total = 0

function buyIce(id) {
  let all = [...iceCream, ...vessels, ...toppings]
  let shop = all.find(s => s.id == id)
  console.log(shop)
  basket.push(shop)
  drawBasket()

}

function drawBasket() {
  let template = ""
  let subTotal = 0
  basket.forEach(b => {
    subTotal += b.price
    template += `
    <div class="col-12">
      <div class="d-flex justify-content-between">
        <h2>Name: ${b.name} </h2>
        <h2>Price: ${b.price} </h2>
      </div> 
      
    </div>
    
    `
  })
  console.log(template)

  document.getElementById("checkout").innerHTML = template
  document.getElementById("total").innerText = subTotal

}


function draw(arr, element) {
  let template = ""
  console.log("heres draw");
  arr.forEach(a => {
    template += `
    <div class="col-3 ice-cream bg-info" id="iceMenu" onclick="buyIce(${a.id})">
      <img class="img-fluid" src="${a.image}" alt="">
      <div class="d-flex justify-content-between p-3">
        <h5>${a.name}</h5>
        <p>Price: ${a.price}</p>
      </div>

    </div>
    
    `

  })

  document.getElementById(element).innerHTML = template
}

function checkout() {

  if (basket.length) {
    alert("Thanks for buying hope to see you again")
    basket = []
    total = 0
  } else {
    alert("BUY NOW")
  }
  drawBasket()
}

// vesselDraw()

// iceCreamDraw()
drawBasket()
draw(iceCream, "iceCream")
draw(vessels, "vessel")
draw(toppings, "toppings")
