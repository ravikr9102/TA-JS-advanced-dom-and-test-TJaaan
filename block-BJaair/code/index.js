let form = document.querySelector('form');
let ul = document.querySelector('ul');

let cards = JSON.parse(localStorage.getItem('cards')) || [];

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    let title = event.target.elements.title.value;
    let category = event.target.elements.category.value;
    
    cards.push({title, category});
    localStorage.setItem('cards', JSON.stringify(cards))
    createUI(cards,ul);
});

function handleEdit(event,info,id,label){
    let elm = event.target;
    let input = document.createElement('input');
    input.value = info;
    input.addEventListener('keyup', (em) => {
        if(em.keyCode === 13){
            let updatedValue = em.target.value;
            cards[id][label] = updatedValue;
            createUI();
            localStorage.setItem('cards', JSON.stringify(cards))
        }
    })
    input.addEventListener('blur', (em) => {
            let updatedValue = em.target.value;
            cards[id][label] = updatedValue;
            createUI();
            localStorage.setItem('cards', JSON.stringify(cards))
    })
    let parent = event.target.parentElement;
    parent.replaceChild(input,elm)
}


function createUI(data = cards,root = ul){
    root.innerHTML = "";
    let fragment = new DocumentFragment();
    data.forEach((e, i) => {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.addEventListener('dblclick', (event) => handleEdit(event,e.category,i, 'category'));
        p.innerText = e.category;
        let h2 = document.createElement('h2');
        h2.addEventListener('dblclick', (event) => handleEdit(event,e.title,i, 'title'));
        h2.innerText = e.title;
        li.append(p,h2);
        fragment.appendChild(li)
    })
    root.append(fragment);
}

createUI(cards,ul);