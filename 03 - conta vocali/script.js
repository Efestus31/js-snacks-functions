/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function getVowels(string){
    let vowels ='aAeEiIoOuU';
    let vowelscount = 0;
    for( let i = 0; i <word.length; i++){
        if (vowels.indexOf(word[i]) !== -1){
            vowelscount += 1;
        }
    }
    return vowelscount
}
const vowelsResult = getVowels()


// Invoca la funzione qui e stampa il risultato in console

console.log(vowelsResult);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)