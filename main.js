
// Top Navbar

let button = document.querySelector('.icon4');
let list = document.querySelector('.list');
let right = document.querySelector('.right');
let df = document.querySelector('.df');
let container = document.querySelector('.container');

button.addEventListener('click', function(){
    list.classList.toggle('new-list');
    right.classList.toggle('new-right');
    button.classList.toggle('new-icon4');
    df.classList.toggle('new-df');
    container.classList.toggle('new-container');
});
// Функция для показа рекламного сообщения
function showAdMessage() {
    // Текст рекламного сообщения
    const adMessage = "Спецпредложение! Скидка 30% на все товары!";
  
    // Показываем диалоговое окно с рекламным сообщением
    alert(adMessage);
  }
  
  // Функция для показа рекламного сообщения с заданной задержкой
  function showAdMessageDelayed() {
    // Задержка между показами рекламных сообщений (в миллисекундах)
    const delayInMs = 30000; // 30 секунд
  
    // Показываем рекламное сообщение один раз через 30 секунд
    setTimeout(showAdMessage, delayInMs);
  }
  
  // Функция для показа рекламного сообщения многократно
  function showAdMessageRepeatedly() {
    // Задержка между показами рекламных сообщений (в миллисекундах)
    const delayInMs = 60000; // 1 минута
  
    // Показываем рекламное сообщение каждую минуту
    setInterval(showAdMessage, delayInMs);
  }
  
  // Выберите один из вариантов:
  // showAdMessageDelayed(); // Показывает рекламное сообщение единожды с задержкой
  showAdMessageRepeatedly(); // Показывает рекламное сообщение каждую минуту
  
  // Получаем изображение с классом "clickable-image"
const spinach = document.querySelector('.clickable-spinach');

// Добавляем обработчик события "click" для изображения
spinach.addEventListener('click', () => {
  // Создаем элемент "div" для отображения увеличенного изображения
  const overlay = document.createElement('div');
  overlay.classList.add('spinach-overlay');

  // Создаем элемент "img" для отображения увеличенного изображения
  const largeImage = document.createElement('img');
  largeImage.src = spinach.src;
  largeImage.alt = spinach.alt;
  largeImage.classList.add('large-spinach');

  // Добавляем обработчик события "click" для закрытия увеличенного изображения
  overlay.addEventListener('click', () => {
    overlay.remove();
  });

  // Добавляем увеличенное изображение и оверлей на страницу
  overlay.appendChild(largeImage);
  document.body.appendChild(overlay);
});