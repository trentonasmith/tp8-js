// JavaScript for TP8-js


window.onload = funtion() {
    cardList = document.querySelectorAll("card"); // collection of cards


    cardCount = cardList.length; // how many cards are on the page

    for (c=0; c < cardCount; c++) {
        cardList[c].onclick = function() {
            this.classList.toggle("clicked");
        }
    }
    
}

 // end window.onload 
