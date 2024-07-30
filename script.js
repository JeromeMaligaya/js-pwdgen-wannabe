//Check link
console.log('JS OK')

// 1.recupero l'elemento dal Dom
const resultElement = document.getElementById('result')
console.log(resultElement)

//2.raccolta dati
    // chiedo all'utente il suo nome
    const userName = prompt('Digita il tuo nome', 'Jerome');
    console.log(userName)
    // chiedo all'utente il suo cognome
    const userSurname = prompt('Digita il tuo cognome', 'Maligaya');
    console.log(userSurname)
    // chiedo all'utente il suo colore preferito
    const userColor = prompt('Digita il tuo colore', 'White');
    console.log(userColor)
// fine

// 3.lavorazione dati
    //concatenazione stringhe
    const userInfo = userName + userSurname + userColor;
    console.log(userInfo)
    //generazione password
    let pwNumber = 97;
    const pwUser = userInfo + pwNumber;
    console.log(pwUser)
    //interpolazione messaggio
    const message = `la tua nuova password: ${pwUser}`
// fine

// 4.generazione output
resultElement.innerText = message;

