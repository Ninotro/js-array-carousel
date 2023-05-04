// definisco gli array 


let arrayImg = ["img/01.webp", "img/02.webp" , "img/03.webp" , "img/04.webp", "img/05.webp"]
let inizio = 0 
let main_part = document.getElementById("mainpart")

// creo i div e inserisco le immagini dentro e ad ogni div associo la classe container
for (i=0; i<arrayImg.length;i++) {
    const new_div = document.createElement("div");
    main_part.append (new_div)
    new_div.className += " container";
    new_div.className += " active";
    const new_image = document.createElement("img");
    new_image.setAttribute("src", arrayImg[inizio]);
    new_div.append(new_image)
    inizio++
    console.log(new_div);
    
}

// creo i bottoni
// bottone di sotto
const new_buttonUno = document.createElement("div");
new_buttonUno.className += " button" 
new_buttonUno.className += " next" 

console.log(new_buttonUno);

new_div.append(new_buttonUno);
new_div.append(new_buttonDue);

// bottone di sopra
const new_buttonDue = document.createElement("div");
new_buttonDue.className += " button" 
new_buttonDue.className += " before" 

