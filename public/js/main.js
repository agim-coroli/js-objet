// INTRO PROGRAMATION ORIENTE OBJET (POO)

// let personne = {
//     nom : "Coroli",
//     prenom : "Agim",
//     age : 27,
//     taille : "184cm",
//     couleurObj : {
//         couleur1 : "bleu",
//         couleur2 : "noir",
//     },
//     couleursArr : ["jaune", "vert"],
//     bonjour(){
//         console.log(`bonjour ${this.prenom} ${this.nom}`);
//     }
// }

// console.log(personne); // je clg mon objet
// console.log(personne.prenom + " " + personne.nom); // je clg la propriété prenom et nom de mon objet personne
// console.log(personne.couleurObj.couleur2); // je clg la propriété couleur2 de mon objet couleurObj qui est dans mon objet personne
// console.log(personne.couleursArr[0]); // je clg le premier element de mon tableau 

// personne.bonjour();






// ## Exo 1 
// ### Créez un objet avec vos valeurs
// ### 'Nom', 'prenom', 'age', 'taille'
// ### Affichez votre age via un console.log()
// let obj = {
//     nom : "Redfield",
//     prenom : "Gimz",
//     age : 20,
//     taille : "175cm",
// };
// console.log(obj.age);





// ## Exo 2 
// ### Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)
// let obj2 = {
//     nom : "Valentine",
//     prenom : "Jill",
//     age : 27,
//     taille : "179cm",
// };
// console.log(obj2);
// let obj3 = {};





// ## Exo 3
// ### Remplir les propriétées du 3eme personnage
// ### Son nom doit valoir le nom du personnage1
// ### Son age doit valoir celui du personnage2
// ### Et sa taille doit être rempli avec la valeur que vous souhaitez
// obj3 = {
//     nom : obj.nom,
//     prenom : obj2.prenom,
//     age : obj.age,
// };
// console.log(obj3);






// 2 ieme parti 
// ## Exo 1
// ### Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.
let perso = {
    nom : "trickpa",
    prenom : "patrick",
    sePresenter(){
        console.log(`Bonjour je m'appelle ${this.nom} ${this.prenom}`);
    }
}
perso.sePresenter();






// ## Exo 2
// ### Créer un objet avec un nom et une méthode
// ### La méthode de votre objet lance un prompt permetant de changer son age
// ### Une alert renvoi "[objet] a [age de l'objet] ans"
let objet = {
    nom : "Inglis",
    age : "",
    quelAge(){
        this.age = parseInt(prompt(`quel age as tu ?`));
        alert(`${this.nom} a ${this.age} ans`)
    }
};
objet.quelAge()
// console.log(`${objet.nom} a ${objet.age} ans`);     // ligne complémentaire