// Получаем модальное окно и изображение
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");

// Получаем все элементы с классом "photo"
var photos = document.getElementsByClassName("photo");

// Добавляем обработчик событий для каждой картинки
for (var i = 0; i < photos.length; i++) {
  photos[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.getAttribute("data-src");
    document.body.classList.add("modal-open"); // Добавляем класс для отключения прокрутки
  }
}

// Добавляем обработчик событий для закрытия модального окна
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  closeModal();
}

// Добавляем обработчик событий для закрытия модального окна при клике на фон
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

// Добавляем обработчик событий для закрытия модального окна при нажатии Esc
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open"); // Удаляем класс для включения прокрутки
}