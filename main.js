/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Bonus:
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a chermo il risultato.*/


let container = document.getElementById("container");
let innerTimer = document.getElementById("timer");
let randomArray = [];

randomArrayGenerator(container, randomArray);

let counter = 0;
let timer = setInterval(
    function() {
        innerTimer.innerHTML = counter;
        counter++;
        if (counter === 11) {
            counter = 0;
            clearInterval(timer);
            console.log("OK!")
        }
    }, 1000);




//FUNZIONI
//Generazione di un numero casuale
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Generazione di un array di 5 numeri casuali
function randomArrayGenerator (container, randomArray) {

    while (randomArray.length < 5) {
        randomArray.push(randomNumber(1, 100));
    }

    return container.innerHTML = randomArray;
}