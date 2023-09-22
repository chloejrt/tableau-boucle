"use strict";

//Tableau

let tableauFruit=["Grenade", "Mangue", "Cerise"];  // les [] permettent de créer un tableau (array), un tableau est un objet
//let tableauFruit= ["index 0", "index 1", "index 2"];
console.log(tableauFruit);
console.log(tableauFruit[0]); // permet d'afficher le premier fruit car grenade correspond au numéro 0, etc..

console.log(tableauFruit.length); //  lenght = la longueur du tableau
console.log (tableauFruit.push("Fraise")); // push = pour ajouter au tableau une nouvelle valeur 

tableauFruit [1]= "Goyave" // pour modifier un index dans un tableau on redonne une autre valeur 
// mozilla developer bon site pour le code

// Boucle
for(let i=0;i<tableauFruit.length;i++){ // i++ = i+1
    console.log(tableauFruit[i]); // permet d'afficher chaque fruit un par un dans la page
}
/* attention !! ne pas faire de boucles infinies car peut détruire le PC
pour (un compteur initialisé a 0 ; on teste la valeur du compteur ; on incremente le compteur de 1)
i++ = i=1
i-- = i-1
i+=2 = i+2
*/ 

for (let i=0;i<11;i++){ // le i++ permet d'avancer d'un en un puisque i++ = i+1
    console.log ("bonjour numero"+i); // +i = bonjour numéro de 0 à 10
}


for(let i=10;i>=0;i--){
if(i!=0){     // ! = différent de
    console.log(i);
    }else{
        console.log("bonne année");
    }
}
