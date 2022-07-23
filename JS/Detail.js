var url = new URL(location.href);
var contry;
const params = url.searchParams;
if (params.has('contry')) {
    contry = params.get('contry');
    console.log(contry);
    detailfetcha(contry);
}

async function detailfetcha(contry) {
    await fetch(`https://restcountries.com/v3.1/name/${contry}`).then((x) => {
        return x.json()
    }).then((response) => {
        comes(response);
    })
};
const comes = (response) => {
    let html = "";

    response.forEach(element => {

        if (element.name.common === contry) {
            console.log(element)

            html += ` <div class="img">
                    <img style="width:30vw;" src="${element.flags.png}" class="Card-img-top" alt="...">
                </div>
                <div class="info">
                    <div class="info-base">
                        <div class="pagination">
                            <ul>
                                 <li>${element.name.nativeName.ell.common}</li>
                                <li>${element.population}</li>
                                <li>${element.region}</li>
                                <li>${element.subregion}</li>
                                <li>${element.capital}</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>${element.demonyms.eng.f}</li>
                                <li>${element.currencies.EUR.name}</li>
                                <li>${element.languages.ell}</li>
            
                            </ul>
                        </div>
            
                    </div>
            
                    <div class="bord">
                        <p>Border Countries:</p>
                        <button>France</button>
                        <button>Germany</button>
                        <button>Danmark</button>
                    </div>
                </div>`
        }
    });
    main.innerHTML = html;
}
i.addEventListener('click', () => {
    let data = document.documentElement.dataset.theme;
    // console.log(data);
    if (document.documentElement.dataset.theme === "light") {
        document.documentElement.dataset.theme = "dark";
    } else {
        document.documentElement.dataset.theme = "light";
    }
})