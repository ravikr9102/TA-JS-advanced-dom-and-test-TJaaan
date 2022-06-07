
let div = document.querySelector('div');

let index = 0;

function addQuotes(){
    for(let i = 0; i < 3; i++){
        let div2 = document.createElement('div')
        let h2 = document.createElement('h2');
        h2.innerText = quotes[index].quoteText;
        h2.style.fontSize = "3.8rem"
        h2.style.textAlign = "center"
        let p = document.createElement('p');
        p.innerText = quotes[index].quoteAuthor;
        p.style.fontSize = "2.5rem"
        p.style.textAlign = "center"
        div2.append(h2,p);

        div.append(div2);
        index++;
    }
}

addQuotes();

window.addEventListener("scroll",() => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    if(scrollTop + clientHeight >= scrollHeight && index < quotes.length){
        addQuotes(div,quotes);
    }
});

window.addEventListener('DomContentLoaded', ()=>{
    alert(`The content of the DOM is loaded`);
    addQuotes(div, quotes);
});

