// fetching API
const API_KEY = 'api_key=9fb1298ae93a29a3aa9e3f72647626ce';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

var content = document.getElementById('content');

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const list = data.results;
        list.map((item) => {
                console.log(item);
                const poster = item.poster_path;
                const title = item.original_title;
                // const overview = item.overview;
                const movie = `<div class = "contentchild"><p class="ptag"><h4>${item.overview}</h4></p><img src="${IMG_URL + poster}"></div>
                `
                document.querySelector('#content').innerHTML += movie;
            })
            // console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

var ptag = document.getElementsByClassName("ptag");