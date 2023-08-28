/*
Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/

//creo la lista delle mail delle persone invitate
const search = document.querySelector('button').addEventListener('click', function(){
    const invitedMail = ['mariorossi@gmail.com', 'marcogalli@hotmail.it', 'giulialocatelli@libero.it'];

    //chiedo all'utente tramite un input la sua mail
    const userMail = document.getElementById('userMail').value;
    document.getElementById('mailUser').innerHTML ='la tua email: ' + userMail;

    //controllo se nella lista invitati è presente la mail dell'utente
    const answer = document.getElementById('answer');
    const check = invitedMail.includes(userMail);

    //rispondo se l'utente è invitato o meno
    if (check) {
        answer.innerHTML = 'SEI INVITATO!!!'
    } else {
        answer.innerHTML = 'NON SEI INVITATO!!!'
    }
})