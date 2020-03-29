let category = document.querySelector('select');
let searchTerm = document.querySelector('input');
let button = document.querySelector('button');
let productsDiv = document.querySelector('.productsDiv');
let categoryGroup = [];
let finalCategory = [];
let lastCategory;
let lastSearch;

fetch('products.json')
    .then((data) => {
        return data.json();
    })
    .then((data) => {
        let products = data;
        
        for (let i = 0; i < products.length; i++) {
            const element = products[i];
            fetchBlob(element);
        };

        function initialize() {
            clearDisplay()
            if (lastCategory === category.value && lastSearch === searchTerm.value) {
                return
            }
            categoryGroup = [];
            for (let i = 0; i < products.length; i++) {
                const product = products[i];   
                if (category.value === product.type) {
                    categoryGroup.push(product);
                } else if (category.value === 'all') {
                    categoryGroup.push(product);
                } 
            }
            for (let j = 0; j < categoryGroup.length; j++) {
                const categoryGroupElem = categoryGroup[j];
                if (searchTerm.value.trim().toLowerCase() === '') {
                    finalCategory.push(categoryGroupElem);
                } else if (categoryGroup[j].name.indexOf(searchTerm.value.trim().toLowerCase()) !== -1) {
                    finalCategory.push(categoryGroupElem);
                }
            }
            for (let f = 0; f < finalCategory.length; f++) {
                const finalCategoryElem = finalCategory[f];
                fetchBlob(finalCategoryElem);
            }
            //console.log(finalCategory)
            finalCategory = [];
            lastCategory = category.value;
            lastSearch = searchTerm.value;
        }
        button.addEventListener('click', initialize)
    })
    .catch((e) => {
        console.log(e);
    })

function fetchBlob(product) {
    let url = './images/' + product.image;

    fetch(url)
        .then((response) => {
            return response.blob()
        })
        .then((blob) => {
            let objectURL = URL.createObjectURL(blob);

            showProduct(product, objectURL);
        })
        .catch((e) => {
            console.log(e);
        })
}

function showProduct(product, objectURL) {
    
    let productSection = document.createElement('section');
    let h2 = document.createElement('h2');
    let paragraph = document.createElement('p');
    let image = document.createElement('img');

    productSection.setAttribute('class', product.type);

    h2.textContent = product.name.replace(product.name.charAt(0), product.name.charAt(0).toUpperCase());

    paragraph.textContent = '$' + product.price.toFixed(2)

    image.src = objectURL;
    image.alt = product.name;

    productsDiv.appendChild(productSection)
    productSection.appendChild(h2);
    productSection.appendChild(paragraph);
    productSection.appendChild(image);   
}

function clearDisplay() {
    while (productsDiv.firstChild) {
        productsDiv.removeChild(productsDiv.firstChild);
    }
}
