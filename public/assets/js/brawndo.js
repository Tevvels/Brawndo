const droplet = document.querySelectorAll('.garden_plant--water');
const garden = document.querySelector('.garden');

let waterPectange = 0;
let newNumber =   parseInt(waterPectange) 

go = ()=>{
setInterval(()=>{
    

    droplet.forEach((drop)=> {
        return drop.style.background = `linear-gradient(to bottom, white ${newNumber}%, blue ${newNumber}%)`;
    })
    console.log(newNumber);
        if(newNumber < 100){
        newNumber++;
        }else {
            window.clearTimeout();
        }
    },500)
}

go();

let article = document.createElement("article");
let div = document.createElement("div");
let img = document.createElement("img");
let divTwo = document.createElement("div");


article.classList.add("garden_plant")
div.classList.add("garden_plant--planttype")
divTwo.classList.add("garden_plant--subrow")

div.appendChild(divTwo);

article.appendChild(div);
garden.appendChild(article);

