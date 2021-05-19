// Entscheidungsstrukturen | control structures

// Deklaration
let ageJohn, ageMark;
let isJohnOlder, isJohnEqual;

// Wertzuweisung
ageJohn = 35;
ageMark = 30;

// Logische Aussagen / Tests
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("John ist älter als Mark: " + isJohnOlder);
console.log("John hat das gleiche Alter wie Mark: " + isJohnEqual);

// ***** IF *****
// alternativlos (TINA - There is no alternative)

//if (true)
//if (false)
//if (isJohnOlder) 
//if (ageJohn > ageMark)
//if (35 > 30)
/*
{
    console.log("John ist älter.");
}
*/

// ***** IF - ELSE *****
// mit Alternative (entweder Ja oder Nein)

if (isJohnOlder)
{
    // Ja-Zweig / true
    console.log("John ist älter");
}
else
{
    // Nein-Zweig / false
    console.log("John ist jünger");
}