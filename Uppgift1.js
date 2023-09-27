"use strict";
//Nedastående kod är skriven av Mats Möller, 721004, Webbutvecklingsprogrammet
//Programmet multiplicerar två heltal och skriver ut summan

function Multiplicera(tal1, tal2) 
{
    let summa=tal1*tal2;
    console.log("Summan av " + tal1 + " och " + tal2 + " är: " + summa);
}

//Anropa funktionen med två värden, till exempel 65 och 32:
Multiplicera(65, 32);