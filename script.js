

/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, 
 ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(numberA, numeberB) {
 
    if (numberA === numeberB) {
       return(numberA + numeberB);
    } else {
       return( numberA + numeberB) * 3;
    }
   }
   
    console.log(crazySum(3,2));
   
   
   /* ESERCIZIO 2
    Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro 
    e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o 
    se è esattamente uguale a 400.
   */
   
   /* SCRIVI QUI LA TUA RISPOSTA */
   function boundary(number) {
       let intero = parseInt(number)
   
   if( (number > 20 && number <= 100 ) || number === 400) {
       return true ;
   } else {
       return false;
   }
   };
   
   console.log(boundary(20.5));
   
   
   
   
   /* ESERCIZIO 3
    Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro 
    e la ritorna invertita (es.: EPICODE => EDOCIPE).
   */
   
   
   /* SCRIVI QUI LA TUA RISPOSTA */
   
   function reverseString(stringa) {
       
      return stringa.split("").reverse("").join("");
     }
   
     console.log(reverseString("EPICODE"));
   
    
   
   /* ESERCIZIO 4
    Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro 
    e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
   */
   
   /* SCRIVI QUI LA TUA RISPOSTA */
   
   function upperFirst (stringa) {
   
   let arrayParoleIniziale = stringa.split (" ");
   
   let arrayFinale = [];
   
    for (let i = 0; i < arrayParoleIniziale.lenght; i++) {
   
       let primaLettera = arrayParoleIniziale[i].chartAt(0);
       console.log("Prima Lettera: " + primaLettera);
   
       let primaLetteraMaiuscola = primaLettera.toUpperCase ();
       console.log("Prima Lettera Maiuscola " + primaLetteraMaiuscola);
   
       let parolaSenzaLaPrimaLettera = arrayParoleIniziale [i].slice(1);
       console.log("Parola Senza Prima Lettera " + parolaSenzaLaPrimaLettera);
       
       let parolaSistema = primaLetteraMaiuscola + parolaSenzaLaPrimaLettera ;
   
       arrayFinale.push(parolaSistema)
   }
   
   console.log(arrayFinale.join (" "));
   
   }
   
   upperFirst("Ciao mondo");
   
   /* ESERCIZIO 5
    Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e 
    ritorna un array contenente n numeri random contenuti tra 0 e 10.
   */
   
   /* SCRIVI QUI LA TUA RISPOSTA */
   
   function giveMeRandom (n) {
       const array = [];
       for (let i = 0; i < n; i++) {
           array.push(Math.floor(Math.random () * 11 ))
       }
       return array;
   
   }
   console.log(giveMeRandom(7));
   
   
   
   //EXTRA:
   
   /* ESERCIZIO 1
    Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e 
    calcola l'area del rettangolo associato.
   */
   
   /* SCRIVI QUI LA TUA RISPOSTA */
   
   function area (l1, l2) {
       return l1 * l2 ;
   
   }
   let areaDelRettangelo = area (3 , 4);
   console.log(areaDelRettangelo);
   
   /* ESERCIZIO 2
    Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta 
    tra un numero fornito e 19.
    Se il valore calcolato è più grande di 19, 
    la funzione deve tornare tale risultato moltiplicato per 3.
   */
   
   /* SCRIVI QUI LA TUA RISPOSTA */
   
   function crazyDiff (num) {
       let differnzaAssoluta = Math.abs(num - 19) ;
   
       if (differnzaAssoluta > 19) {
           return differnzaAssoluta * 3 ;
       } else {
           return differnzaAssoluta;
       }
       
   }
   
   console.log(crazyDiff(3));
   
   /* ESERCIZIO 3
    Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
    La funzione deve aggiungere la parola "code" all'inizio della stringa fornita 
    e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora 
    deve ritornarla senza modifiche.
   */
   
   /* SCRIVI QUI LA TUA RISPOSTA */
   
   
   function codify (stringa) {
       if (stringa.startsWith("code")) {
           return stringa ;
       }else {
           return "code " + stringa ;
       }
   
   }
   
   console.log(codify ("coders"));
   console.log(codify ("banane"));
   
   /* ESERCIZIO 4
    Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo 
    come parametro.
    La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, 
    e in tal caso tornare true; altrimenti deve tornare false.
    SUGGERIMENTO: operatore modulo
   */
   
   /* SCRIVI QUI LA TUA RISPOSTA */
   
   function check3and7 (number) {
   
       if (number >= 0 &&  (number % 3 === 0 || number % 7 === 0 )) {
           return true;
       } else if ( typeof number != "number"){
           console.log(("inserisci un numero, infame!"));
       }
       
       else {
           return false
       }
   
   }
   
   console.log(check3and7 (155));
   
   
   
   /* ESERCIZIO 5
    Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e 
    la ritorna senza il primo e l'ultimo carattere.
   */
   
   /* SCRIVI QUI LA TUA RISPOSTA */
   
   function  cutString (stringa) {
       if(stringa.length >= 2) {
           return stringa.slice (1, -1 );
       } else {
           return "";
       }
   
   }
   
   console.log(cutString ("cavallo"));
   
   /* SCRIVI QUI LA TUA RISPOSTA */
   /* RIPROVO IL 4 ESERCIZIO */
   
   function upperFirstA(stringa) {
       return stringa.chartAt(0).toUpperCase() + stringa.slice(1);
   }
   
   
   function upperFirstConLaFrase(stringa) {
       let words = stringa.split(" ");
       let finalString =[];
   
       for (let i = 0; i < words.lenght; i++) {
           let firstChar = words[i].chartAt(0);
           let upperCaseChar = firstChar.toUpperCase();
           let cuttedString = words[i].slice(1);
           let finalWord = upperCaseChar + cuttedString;
           finalString.push(finalWord);
       }
   
       console.log(finalString.join (""));
   }
   
    upperFirstConLaFrase("Ciao bello");