//const hodinovka = 300
//const pocetHodin = Number(prompt("Zadej počet hodin ", "160"))  //očekává dva parametry 
//const plat = hodinovka * pocetHodin
//const premie = Number(prompt("Zadej mimořádnou odměnu v kč"))
//document.body.innerHTML += "<p>Pepa vydělal" + plat + " Kč</p>"



const jmeno = prompt("Zadej celé jméno")
const vek = Number(prompt("Zadej věk"))

//document.body.innerHTML += "<p>" + jmeno  + vek + "</p>"
//alert(jmeno + "věk:" + vek)

const person = {
    jmeno: jmeno,
    vek: vek,
    jazyk: jazyk,
}

const jazyk = window.navigator.language

document.body.innerHTML += "<p>" + person.jmeno + person.vek + "</p>"
console.log(person)


/*
const sazbaHodin = Number(prompt("Zadej hodinovou sazbu v korunách"))
const pocetHodin2 = Number(prompt("Kolik hodin pracuješ"))
const dniMesic = Number(prompt("Kolik dní v měsíci pracuješ"))



document.body.innerHTML += "<p>" + (sazbaHodin * pocetHodin2) * dniMesic + "</p>"
*/


/*
//objekty
 const kniha = {
    nazev: "Harry Potter",
    autor: "J. R. Roling",
    cena: 450,
    skladem: true
 }

 kniha.autor = "Oleg Pan" //přepíšu 
 kniha.jazyk = "čeština" //přidám jazyk

 document.body.innerHTML += "<p> Nazev: " + kniha.nazev +" Autor: " + kniha.autor + " Cena: " +kniha.cena + " Skladem: " +kniha.skladem + "</p>"
*/

/*
const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };

  document.body.innerHTML += "<p> Dispozice bytu : " + apartment.disposition + "</p>"
  document.body.innerHTML += "<p> Nájem : " + apartment.price.rent + "</p>"
  document.body.innerHTML += "<p> Výměra bytu : " + (apartment.area.floorage + apartment.area.balcony) + "</p>"
  document.body.innerHTML += "<p> Město : " + apartment.city + "  Čtvrť: " + apartment.district + "</p>"

  apartment.status = "taken"

  document.body.innerHTML += "<p> Stav inzerátu : " + apartment.status + "</p>"

*/



  



