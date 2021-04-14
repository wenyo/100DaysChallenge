const API_ALL = 'https://pokeapi.co/api/v2/pokemon';
const PAGE_NUMBER = 15;
let TOTAL_PAGES = 20;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
};

const toggleAlert = () => {
    const alert = document.getElementById('alert');
    const bShow = alert.classList.contains('active');
    if (bShow) {
        alert.classList.remove('active');
    } else {
        alert.classList.add('active');
    }
};

const getUrl = (page) => {
    const offset = (page - 1) * PAGE_NUMBER;
    const url = `${API_ALL}?offset=${offset}&limit=${PAGE_NUMBER}`;
    return url;
};

const getItemByUrl = async (url, page) => {
    toggleAlert();

    const content = document.getElementById('content');
    let data = {};
    let orderData = [];

    await getAllPokeAPI(url).then((res) => (data = res));

    await getPokeInfo(data.results).then((res) => (orderData = res));

    let sCardList = '';
    for (const pokeInfo of orderData) {
        sCardList += buildCard(pokeInfo);
    }
    content.innerHTML = sCardList;

    const { count, next, previous } = data;
    buildPageNumber(count, page, next, previous);

    toggleAlert();
};

const getOnePageItem = (page) => {
    const url = getUrl(page);
    getItemByUrl(url, page);
};

const getAllPokeAPI = async (url) => {
    let data = {};
    await fetch(url)
        .then((res) => res.json())
        .then((res) => (data = res));

    return data;
};

const getPokeInfo = async (results) => {
    let data = [];
    for (const idx in results) {
        const poke = results[idx];
        await getPokeAPI(poke.url).then((res) => {
            data[idx] = res;
        });
    }
    return data;
};

const getPokeAPI = async (url) => {
    let data = {};
    await fetch(url)
        .then((res) => res.json())
        .then((res) => (data = res));
    return data;
};

function paddingLeft(str, lenght) {
    if (str.length >= lenght) return str;
    return paddingLeft('0' + str, lenght);
}

const buildCard = (pokeInfo) => {
    const { id, name, types } = pokeInfo;
    const vTypeName = types.map((type) => type.type.name);
    const sTypeName = '<span>' + vTypeName.join('</span><span>') + '</span>';
    const sName = name[0].toUpperCase() + name.slice(1);
    const sShowId = paddingLeft(id.toString(), 3);
    const bgcolor = colors[vTypeName[0]];

    const sCardEl = `
            <div class="card" style="background-color: ${bgcolor}">
                <div class="img-container">
                    <img src="https://pokeres.bastionbot.org/images/pokemon/${id}.png" alt="${sName}" />
                </div>
                <h3>${sName}</h3>
                <div>#${sShowId}</div>
                <div class="classfication">${sTypeName}</div>
            </div>
        `;
    return sCardEl;
};

const buildPageNumber = (iPokeCount, iNowPage, next, previous) => {
    const pageNumberEl = document.getElementById('page-number');
    const iTotalPage = Math.round(iPokeCount / PAGE_NUMBER);

    let iStartPage = 0;
    if (iNowPage - 5 <= 0) {
        iStartPage = 1;
    } else if (iNowPage + 2 > iTotalPage) {
        iStartPage = iTotalPage - 4;
    } else {
        iStartPage = iNowPage - 2;
    }

    let sPageList = '';
    for (let iPage = iStartPage; iPage < iStartPage + 5; iPage++) {
        const className = iPage === iNowPage ? 'active' : '';
        sPageList += `<span class="${className}" onclick="getOnePageItem(${iPage})">${iPage}</span>`;
    }

    if (previous) {
        sPageList = `<span onclick="getItemByUrl('${previous}', ${iNowPage - 1})"><</span>${sPageList}`;
    }
    if (next) {
        sPageList = `${sPageList}<span onclick="getItemByUrl('${next}', ${iNowPage + 1})">></span>`;
    }
    pageNumberEl.innerHTML = sPageList;
};

window.onload = () => {
    getOnePageItem(1);
};
