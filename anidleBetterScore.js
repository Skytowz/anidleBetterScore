// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-08-24
// @description  try to take over the world!
// @author       You
// @match        https://aniguessr.com/anidle
// @icon         https://www.google.com/s2/favicons?sz=64&domain=aniguessr.com
// @grant        none
// ==/UserScript==
const rep = {
    genres: 0,
    themes: 0,
    studio: 0,
}

const delay = ms => new Promise(res => setTimeout(res, ms));
const main = async () => {
    let found = false;
    do {
        const button = document.querySelector(".c-copy-score button");
        if(button) {
           found = true;
           button.addEventListener("click",async e => {
               e.preventDefault();
               await delay(50);
               let copy = "COUCOU\nCOUCOU"
               const answer = Array.from(document.querySelectorAll('table[aria-label="Anidle answers"] tbody tr'));
               const lines = [];
               lines.push(`Réponse trouvée en ${answer.length} essai(s)`);
               lines.push("");
               lines.push(...answer.map(getLine));
               lines.push("");
               lines.push("À votre tour :");
               lines.push(window.location.href);
               navigator.clipboard.writeText(lines.join('\n'));
           })
        }
        await delay(1000);
    }while(!found)
}

const getLine = (line, index) => {
    const tab = Array.from(line.childNodes);
    let retour = getEmojiText(tab[0]);
    retour += getUpOrDown(tab[1]);
    retour += getMulti(tab[2],index, "genres");
    retour += getMulti(tab[3],index, "themes");
    retour += getMulti(tab[4],index, "studio");
    retour += getEmojiText(tab[5]);
    retour += getUpOrDown(tab[6]);
    return retour;
}

const getEmojiText = (text) => {
    if(isTextGood(text.childNodes[0])) return '🟩';
    return '🟥';
}

const isTextGood = (p) => {
    const color = window.getComputedStyle(p).color;
    if(color == 'rgb(76, 161, 108)') return true;
    return false;
}

const getUpOrDown = (text) => {
    const arrow = text.querySelector('svg');
    if(!arrow) return '🟩';
    if(arrow.dataset.testid == 'NorthRoundedIcon') return '⬆️';
    return '⬇️';
}

const getMulti = (text, index, type) => {
    const response = Array.from(text.childNodes);
    if(index == 0) {
       rep[type] = response.length;
       return '🟩';
    }
    if(response.length == rep[type] && response.every(isTextGood)){
        return '🟩';
    }
    if(response.some(isTextGood)){
        return '🟧';
    }
    return '🟥';
}


(function() {
    'use strict';
    main();
})();
