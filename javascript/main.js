// definisco gli array 

let arrayImg = ["img/01.webp", "img/02.webp" , "img/03.webp" , "img/04.webp", "img/05.webp"];

let inizio = 0;

// creo il primo elemento div con immagine e bottoni e lo inserisco all'interno del primo container
let main_part = document.getElementById("mainpart")
const new_div1 = document.createElement("div");
main_part.append (new_div1);
new_div1.className += " container";
new_div1.className += " active";
const new_image = document.createElement("img");
new_image.setAttribute("src", arrayImg[inizio]);
new_div1.append(new_image);
// definisco i bottoni
const bottone= document.querySelector(".button.next");
new_div1.append(bottone)
const bottone2= document.querySelector(".button.before");
new_div1.append(bottone2)


// creo i div e inserisco le immagini dentro e ad ogni div associo la classe container
for (i=0; i<arrayImg.length;i++) {
    // creo il div
    const new_div = document.createElement("div");
    
    main_part.append (new_div)
    new_div.className += " container";
    
    
    

   
    

    // inserisco l'immagine
    const new_image = document.createElement("img");
    new_image.setAttribute("src", arrayImg[inizio + 1]);
    new_div.append(new_image);


    
    
    
    inizio++
    console.log(new_div);
    
}



// definisco il cambio di immagine

const container_div = document.querySelectorAll (".container");

console.log(container_div);

 let container_div_active = 0 ;

 

 bottone.addEventListener ("click",
 function(){
        // se non siamo all'ultimo div
    if (container_div_active < container_div.lenght) {
        // togliere la classe al primo
        container_div[container_div_active].classList.remove ("active")

        // passiamo al prossimo div

        container_div_active = container_div_active + 1

        // al prossimo div aggiungiamo la classe active

        container_div[container_div_active].classList.add ("active")

        

    }

    

 }
 )


