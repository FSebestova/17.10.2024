//const hodinovka = 300
//const pocetHodin = Number(prompt("Zadej počet hodin ", "160"))  //očekává dva parametry 
//const plat = hodinovka * pocetHodin
//const premie = Number(prompt("Zadej mimořádnou odměnu v kč"))
//document.body.innerHTML += "<p>Pepa vydělal" + plat + " Kč</p>"



const jmeno = prompt("Zadej jméno")
const vek = Number(prompt("Zadej věk"))

document.body.innerHTML += "<p>" + jmeno  + vek + "</p>"
alert(jmeno + "věk:" + vek)

const sazbaHodin = Number(prompt("Zadej hodinovou sazbu v korunách"))
const pocetHodin2 = Number(prompt("Kolik hodin pracuješ"))
const dniMesic = Number(prompt("Kolik dní v měsíci pracuješ"))



document.body.innerHTML += "<p>" + (sazbaHodin * pocetHodin2) * dniMesic + "</p>"




