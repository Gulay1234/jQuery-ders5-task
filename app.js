let container = document.querySelector(".container");
let item1 = document.createElement("div");
item1.classList.add("item1");
container.append(item1);
let cars = JSON.parse(localStorage.getItem("cars")) || [];
let car1 = {
    name: "BMW",
    year: "1997",
    price: "5000"
}
let car2 = {
    name: "Mercedes",
    year: "1998",
    price: "5000"
}

let p1 = document.createElement("p");
p1.innerText = `Masin adi: ${car1.name}`
item1.append(p1);

let p2 = document.createElement("p");
p2.innerText = `Masinin ili: ${car1.year}`
item1.append(p2);

let p3 = document.createElement("p");
p3.innerText = `Masinin qiymeti: ${car1.price}`
item1.append(p3);

let img = document.createElement("img");
img.src = "dbd3b1e13599dbaf83e0d88b4a35367c.jpg"
item1.append(img);

let button1 = document.createElement("button");
button1.classList.add("remove");
button1.innerText = "Sil"
item1.append(button1);

cars.push(car1);
localStorage.setItem("car1",JSON.stringify(car1));





let item2 = document.createElement("div");
item2.classList.add("item2");
container.append(item2);


let p4 = document.createElement("p");
p4.innerText = `Masin adi: ${car2.name}`
item2.append(p4);

let p5 = document.createElement("p");
p5.innerText = `Masinin ili: ${car1.year}`
item2.append(p5);

let p6 = document.createElement("p");
p6.innerText = `Masinin qiymeti: ${car2.price}`
item2.append(p6);

let img2 = document.createElement("img");
img2.src = "./Без названия (3).jpeg"
item2.append(img2);

let button2 = document.createElement("button");
button2.classList.add("remove");
button2.innerText = "Sil";
item2.append(button2);


cars.push(car2);
localStorage.setItem("car2",JSON.stringify(car2));


let button3 = document.querySelector("#button3");
button3.addEventListener("click", () => {
    let newCar = {
        name: document.querySelector("#name").value,
        year: document.querySelector("#year").value,
        price: document.querySelector("#price").value,
        img: document.querySelector("#img").value
    };

    let newItem = document.createElement("div");
    newItem.classList.add("item1");
    container.append(newItem);

    let p7 = document.createElement("p");
    p7.innerText = `Maşın adı: ${newCar.name}`;
    newItem.append(p7);

    let p8 = document.createElement("p");
    p8.innerText = `Maşının ili: ${newCar.year}`;
    newItem.append(p8);

    let p9 = document.createElement("p");
    p9.innerText = `Maşının qiyməti: ${newCar.price}`;
    newItem.append(p9);

    let imgElement = document.createElement("img");
    imgElement.src = newCar.img;
    newItem.append(imgElement);

    let button3 = document.createElement("button");
    button3.classList.add("remove");
    button3.innerText = "Sil"
    newItem.append(button3);

    cars.push(newCar);
    localStorage.setItem("newCar", JSON.stringify(cars));

});


$(document).ready(function(){
    $("#add").click(function(){
    $(".add-item").animate({
        marginLeft: "767px",
        marginTop: "-472.5px"
    },2000)
    })

    $(".remove").click(function(){
        $(this).parent().remove();
    });

    $("#search").on("keyup", function() {
        var value = $(this).text().toLowerCase();
        $(".item1").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
})

