const newsData = [
  {
      title: 'Начат монтаж чистых зон в помещениях',
      image: '../img/image.png',
      text: 'В помещениях объекта ООО «Центр пептидных технологий» начался монтаж чистых зон.'
  },
  {
      title: 'Закончены работы по монтажу собственной газовой котельной',
      image: '../img/image.png',
      text: 'На объекте ООО «ЦПТ» закончены работы по монтажу собственной газовой котельной.'
  },
  {
    title: 'Начата работа по прокладке инженерных сетей',
    image: '../img/image.png',
    text: 'Начата работа по прокладке инженерных сетей на объекте ООО «Центр пептидных технологий».'
},
{
    title: 'Закончены строительно-монтажные работы по закольцовке газопровода',
    image: '../img/image.png',
    text: 'Совместно с ООО «ТЕЗИС» закончили строительно-монтажные работы по закольцовке газопровода для нужд производства ООО «ЦПТ» в ОЭЗ Новоорловская.'
}
];

const newsContainer = document.getElementById('news-container');

newsData.forEach(item => {
  const newsItem = document.createElement('div');
  newsItem.classList.add('news-item');

  const newsTitle = document.createElement('h2');
  newsTitle.classList.add('news-title');
  newsTitle.textContent = item.title;

  const newsContent = document.createElement('div');
  newsContent.classList.add('news-content');

  const newsImage = document.createElement('img');
  newsImage.src = item.image;
  newsImage.alt = item.title;

  const newsText = document.createElement('p');
  newsText.textContent = item.text;

  newsContent.appendChild(newsImage);
  newsContent.appendChild(newsText);

  newsItem.appendChild(newsTitle);
  newsItem.appendChild(newsContent);

  newsContainer.appendChild(newsItem);
});