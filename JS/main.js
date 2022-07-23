var cards = document.querySelector(".Countries-cards");
var Dropdown = document.querySelector(".Dropdown-menu");
const search = document.querySelector(".search-input");
const currenturl = new URL(location.href);
const params = currenturl.searchParams;
if (params.has('region')) {
    const region = params.get('region');
    if (region != 'all') {
        Dropdown.value = region;
        let url = new URL(`https://restcountries.com/v3.1/region/${region}`)
        fetcha(url);
    } else {
        let url = new URL('https://restcountries.com/v3.1/all');
        fetcha(url);
    }
} else {
    let url = new URL('https://restcountries.com/v3.1/all');
    fetcha(url);
}

async function fetcha(url) {
    await fetch(url).then((x) => {
        return x.json()
    }).then((response) => {
        comes(response);
    })
}
const comes = (response) => {
    let html = "";
    response.forEach(element => {

        html += ` <div class = "Card" style = "width: 18rem;">
<img src = "${element.flags.png}" class = "Card-img-top" alt = "..." >
<div class = "Card-body" >
<h5 class = "Card-title" >${ element.name.common }</h5> <p class = "Card-text" >${ element.population }</p> <a href="Detail.html?contry=${ element.name.common }" class = "btn btn-primary" >${ element.region }</a> </div>

</div>`
    });
    cards.innerHTML = html;
}
Dropdown.addEventListener('change', (e) => {
    regionr = e.target.value;
    if (regionr === 'all') {
        let Url = new URL(`https://restcountries.com/v3.1/${regionr}`)
        fetcha(Url);
    }
    localStorage.setItem('country', `${regionr}`);
    let url = new URL(`https://restcountries.com/v3.1/region/${regionr}`);
    history.pushState(null, null, `/?region=${regionr}`);
    fetcha(url);
});
search.addEventListener('keyup', (e) => {
    let name = e.target.value;
    if (name === "") {
        let url = new URL('https://restcountries.com/v3.1/all');
        fetcha(url);
    }
    console.log(name);
    let url = new URL(`https://restcountries.com/v3.1/name/${name}`);
    history.pushState(null, null, `/?name=${name}`);
    fetcha(url);

});
i.addEventListener('click', () => {
    let data = document.documentElement.dataset.theme;
    // console.log(data);
    if (document.documentElement.dataset.theme === "light") {
        document.documentElement.dataset.theme = "dark";
    } else {
        document.documentElement.dataset.theme = "light";
    }
})