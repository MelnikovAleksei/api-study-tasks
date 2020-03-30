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

function submitSearch(e) {
	pageNumber = 0;
	fetchResults(e);
}

function fetchResults(e) {
	e.preventDefault();

	url += baseURL + '?api-key=' + apiKey + '&page=' + pageNumber + '&q=' + searchTerm.value + '&fq=document_type:("article")'; 

	if (startDate.value !== '') {
		url += '&begin_date=' + startDate.value;
	}

	if (endDate.value !== '') {
		url += '&end_date=' + endDate.value;
	}

	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			let news = json;
			console.log(news);
		})
		.catch((e) => {
			console.log(e);
		})
}




