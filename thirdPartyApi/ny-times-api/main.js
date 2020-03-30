const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const apiKey = 'ZYCbjqv1czdPHdMOJg2xUgjvGRJbHDt8';

let url;

const controls = document.querySelector('.controls');
const searchForm = document.querySelector('form');
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const submitButton = document.querySelector('.submit');
const results = document.querySelector('.results');
const nav = document.querySelector('nav');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const section = document.querySelector('section');

let pageNumber = 0;

nav.style.display = 'none';

searchForm.addEventListener('submit', submitSearch);

prevButton.addEventListener('click', prevPage);
nextButton.addEventListener('click', nextPage);

function submitSearch(e) {
	pageNumber = 0;
	fetchResults(e);
}

function fetchResults(e) {
	e.preventDefault();

	url = baseURL + '?api-key=' + apiKey + '&page=' + pageNumber + '&q=' + searchTerm.value + '&fq=document_type:("article")'; 

	if (startDate.value !== '') {
		url += '&begin_date=' + startDate.value;
	}

	if (endDate.value !== '') {
		url += '&end_date=' + endDate.value;
	}

	console.log('url: ' + url)
	fetch(url)
		.then((result) => {
			return result.json();
		})
		.then((json) => {
			displayResults(json)
			console.log(json);
		})
		.catch((e) => {
			console.log(e);
		})
}

function displayResults(json) {
	while (section.firstChild) {
		section.removeChild(section.firstChild)
	}

	const articles = json.response.docs;

	if (articles.length === 10) {
		nav.style.display = 'block';
	} else {
		nav.style.display = 'none';
	}

	if (articles.length === 0) {
		const paragraph = document.createElement('p');
		paragraph.textContent = 'No results returned';
		section.appendChild(paragraph);
		console.log('No results returned')
	} else {
		for (let i = 0; i < articles.length; i++) {
			const article = document.createElement('article');
			const h2 = document.createElement('h2');
			const link = document.createElement('a');
			const image = document.createElement('img');
			const paragraph1 = document.createElement('p');
			const paragraph2 = document.createElement('p');
			const clearFix = document.createElement('div');

			h2.textContent = articles[i].headline.main;
			
			link.href = articles[i].web_url;
			link.textContent = articles[i].headline.main;
			link.setAttribute('target', '_blank');

			if (articles[i].multimedia.length > 0) {
				image.src = 'http://www.nytimes.com/' + articles[i].multimedia[0].url;
				image.alt = articles[i].headline.main;
			}

			paragraph1.textContent = articles[i].snippet;

			paragraph2.textContent = 'Keywords: ';

			for (let j = 0; j < articles[i].keywords.length; j++) {
				let span = document.createElement('span');
				span.textContent = articles[i].keywords[j].value;
				paragraph2.appendChild(span);
			}

			clearFix.setAttribute('class', 'clearFix');

			article.appendChild(h2);
			article.appendChild(link);
			article.appendChild(image);
			article.appendChild(paragraph1);
			article.appendChild(paragraph2);
			article.appendChild(clearFix);
			section.appendChild(article);
		}
	}
}

function prevPage (e) {
	if (pageNumber > 0) {
		pageNumber--;
	} else {
		return
	}

	fetchResults(e);
}

function nextPage (e) {
	pageNumber++;

	fetchResults(e);
}


