const getMeal = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            getTitle(res.meals[0].strMeal);
        })
        .catch((err) => console.error(err));
};

const getTitle = (sTitle) => {
    const titleEl = document.getElementById('meal');
    titleEl.children[0].innerText = sTitle;
};
