const header = document.querySelector('header');
const section = document.querySelector('section');

fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    .then((response) => {
        return response.json()
    }).then((data) => {
        displayData(data) //displayData(data)
    }).catch((e) => {
        console.log(e)
    })

function displayData(data) {
    const h1 = document.createElement('h1');
    const paragraph = document.createElement('p');
    
    const cards = data['members'];

    for (let index = 0; index < cards.length; index++) {
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const paragraph1 = document.createElement('p');
        const paragraph2 = document.createElement('p');
        const paragraph3 = document.createElement('p');
        const list = document.createElement('ul');
        const listItems = cards[index]['powers'];

        h2.textContent = cards[index]['name'];
        paragraph1.textContent = 'Age: ' + cards[index]['age'];
        paragraph2.textContent = 'Secret identity: ' + cards[index]['secretIdentity'];
        paragraph3.textContent = 'Superpowers: ';

        for (let j = 0; j < listItems.length; j++) {
            const listItem = document.createElement('li');
            
            listItem.textContent = listItems[j];
            list.appendChild(listItem);
        }
        
        article.appendChild(h2);
        article.appendChild(paragraph1);
        article.appendChild(paragraph2);
        article.appendChild(paragraph3);
        article.appendChild(list);

        section.appendChild(article);
    }

    h1.textContent = data['squadName'];
    paragraph.textContent = 'Hometown: ' + data['homeTown'] + ' // Formed: ' + data['formed'];

    header.appendChild(h1);
    header.appendChild(paragraph);
}