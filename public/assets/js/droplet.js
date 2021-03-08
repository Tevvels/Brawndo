// const garden = document.querySelector('.garden');

// let article = document.createElement('article');
// let div = document.createElement('div');
// let imgdrop = document.createElement('img');
// let imgfence = document.createElement('img');
// let imggnome = document.createElement('img');
// let divTwo = document.createElement('div');
// let divtype = document.createElement('div');
// let divwater = document.createElement('div');
// let divlocation = document.createElement('div');

// imgfence.setAttribute('src', '../assets/img/029-fence.svg');
// imggnome.setAttribute('src', '../assets/img/012-dwarf.svg');
// imgdrop.setAttribute('src', '../assets/img/036-drop.svg');

// article.classList.add('garden_plant');
// div.classList.add('garden_plant--planttype');
// divTwo.classList.add('garden_plant--subrow');
// divwater.classList.add('garden_plant--water');
// divlocation.classList.add('garden_plant--location');

// div.appendChild(imggnome);
// divwater.appendChild(imgdrop);
// divlocation.appendChild(imgfence);

// divTwo.appendChild(divwater);
// divTwo.appendChild(divlocation);

// article.appendChild(div);
// article.appendChild(divTwo);

// garden.appendChild(article);

const droplet = document.querySelectorAll('.garden_plant--water');

let waterPectange = 0;
let newNumber = parseInt(waterPectange);


go = () => {
    droplet.forEach((drop) => {
        watervalue = drop.firstChild.nextSibling.getAttribute('data-watered')
        drop.style.background = `linear-gradient(to bottom, white ${watervalue}%, blue ${watervalue}%)`;

        hours = new Date();
        console.log(hours.getHours() / 2);
        console.log(hours.getDay());


        drop.addEventListener("click", (e) => {
            e.stopPropagation()
            e.preventDefault()
            newNumber = e.target.getAttribute('data-watered');
            duration = e.target.getAttribute('data-waterFrequency');
            created = e.target.getAttribute('data-create');
            console.log(created);

            timee = new Date();
            e.target.setAttribute('data-justwater', timee)
            // console.log(timee)
            // console.log(hours)
            // console.log((timee - hours)/1000)
            console.log((timee - hours) / 1000 / 60)
            newNumber = (100 / duration);
            console.log(e.target)
            drop.style.background = `linear-gradient(to bottom, white ${newNumber}%, blue ${newNumber}%)`;
        })
    })

}





go();

const addBtn = document.getElementById('add-plant');

addBtn.addEventListener('click', function () {
    console.log(event.target)
    fetch('/garden/add', {
        method: 'GET',
    }).then((data) => {
        console.log("redirect successful")
        // location.reload();

    });
})


/* set the value of the waterlevel and place them on the object of the value button*/
/* set a practice value of specific dayss
    needed values. waterFrequency which would be a number like 3
    how to set up a counter

    loop that runs thorught the 



*/