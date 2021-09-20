const namn = "test";
const lösenord = "1234";

const uName = document.getElementById("uName");
const pWord = document.getElementById("pWord");

const form = document.getElementById("form");
const btnLogout = document.getElementById("btnLogout");


/*
En if-sats som kollar om användaren redan är inlogad,
isåfall visas "VÄLKOMMEN"-sidan
*/
if(localStorage.getItem("login") === null){                    
}
else {
    form.style.display = "none";
      header.textContent = "VÄLKOMMEN";
      btnLogout.style.display = "inline-block";
}
/*
Hämtar inmatning från användaren och jämför med
rätt inloggnignsuppgifter.
*/
form.addEventListener('submit', (e) => {
    
    e.preventDefault();

 /*
 Vid rätt inmatning visas en "VÄLKOMMEN"-sida och en knapp
 som loggar ut användaren. Sparar användaren i local storage.
 */   
if(uName.value === namn && pWord.value === lösenord){
    localStorage.setItem("login", "true")

    alert("Du har loggat in.");
    form.style.display = "none";
      header.textContent = "VÄLKOMMEN"
      btnLogout.style.display = "inline-block"  
}
/*
Vid fel inmatning talar sidan om att uppgifterna inte stämmer.
*/
else{
    form.style.display = "block";
    error.style.display = "block";
      header.textContent = "SKRIV IN INLOGGNINGSUPPGIFTER"     
}
});
/*
En knapp som loggar ut samt tömmer local storage när användaren trycker på den.
Användaren skickas tillbaka till inloggningssidan.
*/
btnLogout.addEventListener('click', (e) => {
    localStorage.clear();
    form.style.display = "block"
    error.style.display = "none";
    header.textContent = "SKRIV IN INLOGGNINGSUPPGIFTER"
    btnLogout.style.display = "none"
})