const APILINK = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a66ef5560f82e5b6d0f434eef7bd48c6&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?&api_key=a66ef5560f82e5b6d0f434eef7bd48c6&query=`;

const main = document.querySelector("#section");
const form = document.querySelector("#form");
const search = document.querySelector("#query");

returnMovies(APILINK)
function returnMovies(url) {
    fetch(url)
    .then(res => res.json())
    .then(function(data){
        //console.log(data.results);
        data.results.forEach (element => {
            const div_card = document.createElement('div');
            div_card.setAttribute ("class", "card")
            const div_row = document.createElement('div');
            div_row.setAttribute("class", "row");
            const div_column = document.createElement('div');
            div_column.setAttribute("class", "column");
            const image = document.createElement('img');
            image.setAttribute("class", "thumbnail");
            const title = document.createElement('h3');
            title.setAttribute("id", "h3");
            const center = document.createElement('center');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);

            main.appendChild(div_column);
        })
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = ""

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
})