/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//genero due numeri casuali da 1 a 6, uno dell'utente,uno del computer
userNumber = Math.floor(Math.random() * 6) + 1;
computerNumber = Math.floor(Math.random() * 6) + 1;

//metti i due numeri a confronto e stabilisco il vincitore
if (userNumber > computerNumber) {
    document.getElementById('numberChoose').innerHTML = 'il numero del giocatore era:' + userNumber + ' ' + 'il numero del computer era:' + computerNumber + '--->' + 'quindi il vincitore sarà il giocatore';
} else if (userNumber < computerNumber) {
    document.getElementById('numberChoose').innerHTML = 'il numero del giocatore era:' + userNumber + ' ' + 'il numero del computer era:' + computerNumber + '--->' + 'quindi il vincitore sarà il computer';
} else{
    document.getElementById('numberChoose').innerHTML = 'il numero del giocatore era:' + userNumber + ' ' + 'il numero del computer era:' + computerNumber + '--->' + 'quindi è pareggio!';
}


/*
Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/