/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Bonus:
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo il risultato.*/

const elencoNumeriDom = document.getElementById("elencoNumeriDom");
let numeriDaStampare = 5;
let rangeMax = 10;
let elencoNumeriDaIndovinare = [];
let elencoNumeriIndovinati = [];
var continuare = true;

do {
    for (i = 0; i < numeriDaStampare; i++) {
       elencoNumeriDaIndovinare.push(generaNumeroRandom(1, rangeMax));
    }
    document.getElementById("elencoNumeriDom").innerHTML = elencoNumeriDaIndovinare;

    setTimeout(verifica,numeriDaStampare * 3000);
 } while (continuare != true) ;
 




function verifica() {
    elencoNumeriDom.classList.add("d-none");
   for (x = 0; x < numeriDaStampare; x++) {
     let numeroPrompt = parseInt(prompt("Quali numeri ricordi?"));
      if (elencoNumeriDaIndovinare.includes(numeroPrompt)){
         elencoNumeriIndovinati.push(numeroPrompt);
      }
   }
   document.getElementById("risultato").innerHTML = `Hai indovinato
    ${elencoNumeriIndovinati.length} numeri(${elencoNumeriIndovinati})`;

if (elencoNumeriIndovinati.length == elencoNumeriDaIndovinare.length) {
    continuare = confirm("Vuoi continuare?");
    if (continuare == true) {
       numeriDaStampare++;
       elencoNumeriDaIndovinare = [];
       elencoNumeriIndovinati = [];
       elencoNumeriDom.classList.remove("d-none");
       document.getElementById("risultato").innerHTML = ``;
    }
 } 
} 


function generaNumeroRandom(min, max) {
   const numeroRandom = Math.floor( Math.random() * (max - min + 1) ) + min;
   return numeroRandom;
}