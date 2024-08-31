// ==UserScript==
// @name         Semantix Solver
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Ruendan
// @match      https://cemantix.herokuapp.com/*
// @match      https://www.semantus.fr/*
// @match      https://cemantix.certitudes.org/
// @match      https://cemantix.certitudes.org
// @match      https://cemantix.certitudes.org/pedantix
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cemantix.herokuapp.com
// @grant        none
// ==/UserScript==
 
let input = document.querySelector("#word-field")
let button = document.querySelector("#go")
let ret = false;
switch(window.location.href){
    case "https://cemantix.herokuapp.com/":
        input = document.querySelector("#cemantix-guess");
        button = document.querySelector("#cemantix-guess-btn");
        break;
    case "https://cemantix.herokuapp.com/pedantix":
        input = document.querySelector("#pedantix-guess");
        button = document.querySelector("#pedantix-guess-btn");
        break;
    case "https://www.semantus.fr/clap/":
        input = document.querySelector("#word-field");
        button = document.querySelector("#go");
        break;
    case "https://cemantix.certitudes.org/":
        input = document.querySelector("#pedantix-guess");
        button = document.querySelector("#pedantix-guess-btn");
        break;
    case "https://cemantix.certitudes.org/pedantix":
        input = document.querySelector("#pedantix-guess");
        button = document.querySelector("#pedantix-guess-btn");
        break;
    default:
        ret = true;
}
function loop(i, listWords){
    console.log(listWords)
    console.log(ret)
    if(ret) return;
    setTimeout(x => {
        if(i < listWords.length) {
            input.value = listWords[i];
            button.click();
            loop(i + 1, listWords);
        }
        i++;
    }, 500);
}
const button_activate = document.createElement("button");
button_activate.id= "ACTIVERSCRIPT";
button_activate.innerText="Activer script";
button_activate.style="position:fixed;margin-left:10%;margin-top:40%;top:0;z-index:50;";
button_activate.classList.add("btn")
button_activate.classList.add("btn-primary")
button_activate.classList.add("guess-btn")
document.body.append(button_activate);
(function() {
    'use strict';
    const listWords = [
        "a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "w", "x", "c", "v", "b", "n",
        "mais", "ou", "et", "donc", "or", "ni", "car", "a", "à", "dans", "par", "pour", "en", "vers", "avec", "deux", "de", "sans", "sous", "si", "chez",
        "je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles", "sur", "alors",
        "le", "la", "les", "de", "des", "selon", "mon", "ton", "son", "ses", "ces", "mien", "sien", "notre", "votre", "ce", "se", "cette",
        "avoir", "être", "prendre", "faire", "voir", "croire", "pouvoir", "savoir", "connaître", "vivre", "mourir", "découvert",
        "qui", "que", "quoi", "dont", "ou", "quand", "comment", "pourquoi",
        "toujours", "jamais", "souvent", "parfois", "ensemble", "maximum", "minimum",
        "enfant", "enfants", "fils", "fille", "parent", "parents", "père", "mère", "adulte", "mature", "seul",
        "guerre", "soldat", "militaire", "bataille", "Vietnam", "golf",
        "temps", "seconde", "minute", "heure", "plus", "mois", "taille", "gros", "petit", "moyen", "grand", "jour", "mois", "année", "an", "cette",
        "homme", "2000", "chateau", "entre", "est", "ouest", "nord", "sud", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "femme", "1000", "X", "France", "Asie", "Afrique", "Amerique", "Europe", "Oceanie", "orient", "occident", "un", "une",
        "janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"
    ];
    button_activate.addEventListener("click",()=>loop(0,listWords));
})();
