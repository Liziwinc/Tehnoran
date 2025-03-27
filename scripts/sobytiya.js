const newsData = [
  {
    title: "Начат монтаж чистых зон в помещениях",
    imageLarge: "../img/news_1.jpg",
    image: "../img/news_1_1.jpg",
    text: "В помещениях объекта ООО «Центр пептидных технологий» начался монтаж чистых зон.",
  },
  {
    title: "Закончены работы по монтажу собственной газовой котельной",
    imageLarge: "../img/news_2.jpg",
    image: "../img/news_2_2.jpg",
    text: "На объекте ООО «ЦПТ» закончены работы по монтажу собственной газовой котельной.",
  },
  {
    title: "Начата работа по прокладке инженерных сетей",
    imageLarge: "../img/news_3.jpg",
    image: "../img/news_3_3.jpg",
    text: "Начата работа по прокладке инженерных сетей на объекте ООО «Центр пептидных технологий».",
  },
  {
    title: "Закончены строительно-монтажные работы по закольцовке газопровода",
    imageLarge: "../img/news_4.jpg",
    image: "../img/news_4_4.jpg",
    text: "Совместно с ООО «ТЕЗИС» закончили строительно-монтажные работы по закольцовке газопровода для нужд производства ООО «ЦПТ» в ОЭЗ Новоорловская.",
  },
];

const newsContainer = document.getElementById("news-container");
const popupContainer = document.getElementById("popup-container");
const popupImage = document.getElementById("popup-image");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const popupClose = document.getElementById("popup-close");

newsData.forEach((item) => {
  const newsItem = document.createElement("div");
  newsItem.classList.add("news-item");

  const newsTitle = document.createElement("h2");
  newsTitle.classList.add("news-title");
  newsTitle.textContent = item.title;

  const newsContent = document.createElement("div");
  newsContent.classList.add("news-content");

  const newsImage = document.createElement("img");
  newsImage.src = item.image;

  const newsText = document.createElement("p");
  newsText.textContent = item.text;

  newsContent.appendChild(newsImage);
  newsContent.appendChild(newsText);

  newsItem.appendChild(newsTitle);
  newsItem.appendChild(newsContent);

  newsItem.addEventListener("click", () => {
    popupImage.src = item.imageLarge;
    popupTitle.textContent = item.title;
    popupText.textContent = item.text;
    popupContainer.style.display = "flex";
    document.body.classList.add("popup-open");
  });

  newsContainer.appendChild(newsItem);
});

popupClose.addEventListener("click", () => {
  popupContainer.style.display = "none";
  document.body.classList.remove("popup-open");
});

popupContainer.addEventListener("click", (event) => {
  if (event.target === popupContainer) {
    popupContainer.style.display = "none";
    document.body.classList.remove("popup-open");
  }
});
