const droplet = document.querySelectorAll('.garden_plant--water');
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



