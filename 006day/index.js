const API_ALL = 'https://pokeapi.co/api/v2/pokemon';
const PAGE_NUMBER = 20;

const getOnePageItem = async (page) => {
    let data = {};
    let orderData = [];
    await getAllPokeAPI(page).then((res) => (data = res));

    await getPokeInfo(data.results).then((res) => (orderData = res));
    console.log(orderData);

    for (const pokeInfo of orderData) {
        buildCard(pokeInfo);
    }
};

const getAllPokeAPI = async (pageNumber) => {
    const offset = (pageNumber - 1) * PAGE_NUMBER;
    const limit = pageNumber * PAGE_NUMBER;
    let data = {};
    await fetch(`${API_ALL}?offset=${offset}&limit=${limit}`)
        .then((res) => res.json())
        .then((res) => (data = res));
    console.log(data);
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

const buildCard = (pokeInfo) => {
    const { id, name, types } = pokeInfo;
    const vTypeName = types.map((type) => type.type.name);
    const sName = name[0].toUpperCase() + name.slice(1);
    console.log(id, sName, vTypeName);
};

getOnePageItem(1);
