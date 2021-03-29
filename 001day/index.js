const getMeal = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      const warpEl = document.getElementById("warp");
      warpEl.classList.remove("homepage");
      warpEl.classList.add("getMeal");

      const meal = res.meals[0];
      getTitle(meal.strMeal);
      getArticle(meal.strMealThumb, meal.strInstructions);
      getInfo([meal.strCategory, meal.strArea, meal.strTags]);
      getIngred(meal);
      getVideo(meal.strYoutube);
    })
    .catch((err) => console.error(err));
};

const getTitle = (sTitle) => {
  const infoEl = document.getElementById("info");
  infoEl.children[0].innerText = sTitle;
};

const getArticle = (img, article) => {
  const articleEl = document.querySelector(".article");
  articleEl.children[0].innerText = article;
  articleEl.children[1].children[0].src = img;
};

// [category, area, tags]
const getInfo = (props) => {
  const infoChild = document.getElementById("info").children[1];
  for (const idx in props) {
    if (!props[idx]) continue;

    const vText = props[idx].split(",");
    const sText = vText.join("</li><li>#")
    infoChild.innerHTML = `<li>#${sText}</li>`;
  }
};

const getIngred = (meal) => {
  const IngredEl = document.querySelector(".ingred");
  const ulEl = IngredEl.children[1];
  let liEl = "";
  for (let idx = 1; idx <= 20; idx++) {
    if (!meal[`strIngredient${idx}`]) break;
    liEl += `
        <li>
            <span>${meal[`strIngredient${idx}`]}</span>
            <span>${meal[`strMeasure${idx}`]}</span>
        </li>
    `;
  }
  ulEl.innerHTML = liEl;
};

const getVideo = (video) => {
  if (!video) return;
  const videoEl = document.getElementById("video");
  videoEl.innerHTML = `
    <iframe width="100%" 
            height="315"
            src="https://www.youtube.com/embed/${video.slice(-11)}">
    </iframe>
    `;
};