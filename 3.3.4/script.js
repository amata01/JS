let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    console.log("Vítej na stránce!")
 if (isAdmin) {
    console.log("Přístup do panelu admin povolen")
 } else {
    console.log("Přístup uživatele povolen!")
 }

}
    
// Operátory

let age = 20;
let hasDriverLicense = true;

if (age >= 18 && hasDriverLicense) {
    console.log("Můžeš řídit!")
} else {
    console.log("Nemůžeš řídit!")
}

let isHoliday = false;
let isWeekend = true;

if (isHoliday || isWeekend) {
    console.log("Je čas relaxovat!")
}

let ageB = 3;
if (ageB <= 3) {
    console.log("vstupné zdarma!")
} else {
    console.log("vstupné za poplatek")
}