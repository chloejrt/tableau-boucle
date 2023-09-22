/**            BOUCLE
 *              FOR
 * Declarer une variable a qui est egale à un entier positif
 * 
 * Faire un console log de 'OKLM' autant de fois que le valeur de a
 * 
 * 
 */

let aBis=4;
for(let i=0;i<aBis;i++){
    console.log('OKLM');
}

/**                 Tableau
 * 
 * Declare un tableau vide names 
 * Ajouter "vincent", "Paul", et "Arthur" dans le tableau via la methode push
 * 
 * Pour chaque element du tableau
 * 
 * Ajouter a la fin "va a la peche"
 * Afficher chaque element 
 * 
 */

let names=[];
names.push('Vincent',"Paul",'Arthur');

names.forEach(name =>{
    name += 'va a la peche ';
    console.log(name)
})
