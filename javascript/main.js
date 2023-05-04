// definisco gli array 

let arrayImg = ["img/01.webp", "img/02.webp" , "img/03.webp" , "img/04.webp", "img/05.webp"];

let inizio = 0;

// creo il primo elemento div con immagine e bottoni e lo inserisco all'interno del primo container
let centratore = document.getElementById("centratore")
const new_div1 = document.createElement("div");
centratore.append (new_div1);
new_div1.className += " container";
new_div1.className += " active";
const new_image = document.createElement("img");
new_image.setAttribute("src", arrayImg[inizio]);
new_div1.append(new_image);



// creo i div e inserisco le immagini dentro e ad ogni div associo la classe container
for (i=0; i<arrayImg.length-1;i++) {
    // creo il div
    const new_div = document.createElement("div");
    centratore.append (new_div)
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



 let container_div_active = 0 ;

 let bottone = document.querySelector(".next")



 bottone.addEventListener("click",
 function(){ 
    if(container_div_active < (container_div.length - 1)) {
        
             
    // rimuovo la classe active
    container_div[container_div_active].classList.remove ("active");
    
    // vado al div successivo

    container_div_active = container_div_active + 1 

    bottone2.classList.remove ("hidden");

    // aggiungo la classe active

    container_div[container_div_active].classList.add ("active");
        // lo nascondo se sono all'ultima immagine
    if (container_div_active === (container_div.length - 1)) {
        bottone.classList.add ("hidden");


    }

}             
 }
 )
// Aggiungo l'evento click all'altro bottone

let bottone2 = document.querySelector(".before")

bottone2.addEventListener("click",
function(){ 
   if(container_div_active > 0 ) {

    bottone.classList.remove ("hidden");
   // rimuovo la classe active
   container_div[container_div_active].classList.remove ("active");
   
   // vado al div successivo

   container_div_active = container_div_active - 1  

   // aggiungo la classe active

   container_div[container_div_active].classList.add ("active");
       // lo nascondo se sono all'ultima immagine
   if (container_div_active === 0) {
       bottone2.classList.add ("hidden");


   }

}             
}
)


