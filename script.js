// МАССИВ БЛЮД
const dishes = [
  { name: 'Салат из томатов', price: 700, img: 'img/menu-img/11zon_cropped (5).png' },
  { name: 'Каре из ягнятины', price: 1000, img: 'img/menu-img/11zon_cropped (2).png' },
  { name: 'Королевский микс', price: 1300, img: 'img/menu-img/11zon_cropped (1).png' },
  { name: 'Морской гребешок', price: 1000, img: 'img/menu-img/11zon_cropped (4).png' },
  { name: 'Стейк из тунца', price: 1400, img: 'img/menu-img/11zon_cropped (3).png' },
  { name: 'Малиновый тарт', price: 1000, img: 'img/menu-img/11zon_cropped (6).png' },
  { name: 'Стейк из лосося', price: 1300, img: 'img/menu-img/11zon_cropped (7).png' },
  { name: 'Утиная грудка', price: 1500, img: 'img/menu-img/11zon_cropped (8).png' },
  { name: 'Креветка с бри', price: 1220, img: 'img/menu-img/11zon_cropped (9).png' },
  { name: 'Салат с лобстером', price: 1240, img: 'img/menu-img/11zon_cropped (11).png' },
  { name: 'Шоколадный милфей', price: 1050, img: 'img/menu-img/11zon_cropped (12).png' },
  { name: 'Панакота', price: 1000, img: 'img/menu-img/11zon_cropped (13).png' },
];

// СОЗДАНИЕ HEADER, HERO, МОДАЛЬНОГО ОКНА КОРЗИНЫ
function createHeader() {
  const header = document.createElement('header');
  header.className = 'header';

  const navbar = document.createElement('nav');
  navbar.className = 'navbar';

  // Логотип
  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.textContent = 'Continental Palate';

  // Навигационные ссылки
  const navLinks = document.createElement('ul');
  navLinks.className = 'nav-links';
  const links = [
    { text: 'На главную', href: '#', active: false },
    { text: 'О нас', href: '#', active: false },
    { text: 'Меню', href: '#', active: true }
  ];
  links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    if (link.active) a.classList.add('active');
    li.appendChild(a);
    navLinks.appendChild(li);
  });

  // Корзина
  const cart = document.createElement('div');
  cart.className = 'cart';
  cart.id = 'cart';
  const cartIcon = document.createElement('span');
  cartIcon.className = 'cart-icon';
  cartIcon.textContent = '🛒';
  const cartCount = document.createElement('span');
  cartCount.className = 'cart-count';
  cartCount.id = 'cart-count';
  cartCount.textContent = '0';
  cart.appendChild(cartIcon);
  cart.appendChild(cartCount);

  // Бургер-меню
  const burger = document.createElement('div');
  burger.className = 'burger';
  for (let i = 0; i < 3; i++) {
    const line = document.createElement('div');
    burger.appendChild(line);
  }
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('mobile');
  });

  navbar.appendChild(logo);
  navbar.appendChild(navLinks);
  navbar.appendChild(burger);
  navbar.appendChild(cart);
  header.appendChild(navbar);

  document.getElementById('header-container').appendChild(header);
}

function createHero() {
  const hero = document.createElement('section');
  hero.className = 'hero';
  hero.id = 'hero';

  const heroSimple = document.createElement('div');
  heroSimple.className = 'hero-simple';
  heroSimple.innerHTML = `
    <p>Каждое наше блюдо — результат тщательной работы и любви к кулинарии.</p>
    <p>Мы используем только свежайшие ингредиенты, причём многие из них поставляются местными производителями.</p>
    <p>Это позволяет нам поддерживать концепцию устойчивого развития и заботиться о здоровье наших гостей.</p>
  `;

  const heroDish = document.createElement('img');
  heroDish.className = 'hero-dish';
  heroDish.id = 'hero-img';
  heroDish.src = 'img/menu-img/11zon_cropped (5).png';
  heroDish.alt = 'Big Dish';

  hero.appendChild(heroSimple);
  hero.appendChild(heroDish);

  document.getElementById('hero-container').appendChild(hero);
}

function createCartOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'cart-overlay hidden';
  overlay.id = 'cart-overlay';

  const content = document.createElement('div');
  content.className = 'cart-content';
  content.id = 'cart-content';

  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-window_header';

  const h2 = document.createElement('h2');
  h2.textContent = 'Ваш заказ';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-cart';
  closeBtn.id = 'close-cart-btn';
  closeBtn.textContent = 'x';

  modalHeader.appendChild(h2);
  modalHeader.appendChild(closeBtn);

  const table = document.createElement('table');
  table.className = 'cart-table';
  table.id = 'cart-table';

  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');
  ['Название', 'Цена', ''].forEach(txt => {
    const th = document.createElement('th');
    th.textContent = txt;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  tbody.id = 'cart-table-body';
  table.appendChild(tbody);

  const cartTotal = document.createElement('div');
  cartTotal.className = 'cart-total';
  cartTotal.id = 'cart-total';
  cartTotal.textContent = 'Итоговая сумма: 0 руб.';

  const buttonsRow = document.createElement('div');
  buttonsRow.className = 'buttons-row';

  const checkoutBtn = document.createElement('button');
  checkoutBtn.className = 'modal-btn checkout-btn';
  checkoutBtn.id = 'checkout-btn';
  checkoutBtn.textContent = 'Заказать';

  const clearCartBtn = document.createElement('button');
  clearCartBtn.className = 'modal-btn clear-cart';
  clearCartBtn.id = 'clear-cart-btn';
  clearCartBtn.textContent = 'Очистить корзину';

  buttonsRow.appendChild(checkoutBtn);
  buttonsRow.appendChild(clearCartBtn);

  content.appendChild(modalHeader);
  content.appendChild(table);
  content.appendChild(cartTotal);
  content.appendChild(buttonsRow);

  overlay.appendChild(content);

  document.body.appendChild(overlay);
}

// ИНИЦИАЛИЗАЦИЯ ЭЛЕМЕНТОВ
createHeader();
createHero();
createCartOverlay();

// ССЫЛКИ НА ДИНАМИЧЕСКИЕ ЭЛЕМЕНТЫ
const carouselTrack = document.getElementById('carousel-track');
const carouselContainer = document.getElementById('carousel-container');
const cartOverlay = document.getElementById('cart-overlay');
const cartTableBody = document.getElementById('cart-table-body');
const cartTotalEl = document.getElementById('cart-total');
const cartCountEl = document.getElementById('cart-count');
const closeCartBtn = document.getElementById('close-cart-btn');
const checkoutBtn = document.getElementById('checkout-btn');
const clearCartBtn = document.getElementById('clear-cart-btn');
const cartEl = document.getElementById('cart');

// ПЕРЕМЕННЫЕ ДЛЯ КОРЗИНЫ
let cartCount = 0;
let selectedDishes = [];

// АНИМАЦИЯ "ТОВАР ПАДАЕТ В КОРЗИНУ"
function animateToCart(img, startRect) {
  const flyingImg = img.cloneNode(true);
  flyingImg.className = 'flying-img';
  flyingImg.style.left = startRect.left + 'px';
  flyingImg.style.top = startRect.top + 'px';
  document.body.appendChild(flyingImg);

  const cartRect = cartEl.getBoundingClientRect();
  const deltaX = cartRect.left + cartRect.width / 2 - (startRect.left + startRect.width / 2);
  const deltaY = cartRect.top + cartRect.height / 2 - (startRect.top + startRect.height / 2);

  setTimeout(() => {
    flyingImg.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.1)`;
    flyingImg.style.opacity = '0';
  }, 50);

  flyingImg.addEventListener('transitionend', () => {
    flyingImg.remove();
  });
}

// ФУНКЦИЯ СОЗДАНИЯ КАРТОЧКИ
function createCard(dish) {
  const card = document.createElement('div');
  card.className = 'card';

  const imgEl = document.createElement('img');
  imgEl.src = dish.img;
  imgEl.alt = dish.name;
  card.appendChild(imgEl);

  const title = document.createElement('h3');
  title.textContent = dish.name;
  card.appendChild(title);

  const priceP = document.createElement('p');
  priceP.className = 'price';
  priceP.textContent = dish.price + ' руб.';
  card.appendChild(priceP);

  const plusBtn = document.createElement('button');
  plusBtn.className = 'add-to-cart';
  plusBtn.textContent = '+';
  card.appendChild(plusBtn);

  plusBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    cartCount++;
    cartCountEl.textContent = cartCount;
    selectedDishes.push(dish);
    const rect = imgEl.getBoundingClientRect();
    animateToCart(imgEl, rect);
  });

  // При клике на карточку меняем изображение в hero
  card.addEventListener('click', () => {
    const heroImg = document.getElementById('hero-img');
    heroImg.src = dish.img;
  });

  return card;
}

// БЕСКОНЕЧНАЯ КАРУСЕЛЬ
const infiniteDishes = [...dishes, ...dishes, ...dishes];
infiniteDishes.forEach(dish => {
  const card = createCard(dish);
  carouselTrack.appendChild(card);
});

// Прокрутка карусели колесиком мыши
carouselContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  carouselContainer.scrollLeft += event.deltaY * 2;
});

// МОДАЛЬНОЕ ОКНО КОРЗИНЫ
function showCartOverlay() {
  renderCart();
  cartOverlay.classList.remove('hidden');
  cartOverlay.style.opacity = '0';
  setTimeout(() => {
    cartOverlay.style.opacity = '1';
  }, 50);
}
function hideCartOverlay() {
  cartOverlay.style.opacity = '0';
  setTimeout(() => {
    cartOverlay.classList.add('hidden');
  }, 300);
}

cartEl.addEventListener('click', showCartOverlay);
closeCartBtn.addEventListener('click', hideCartOverlay);

function renderCart() {
  cartTableBody.innerHTML = '';
  let total = 0;

  selectedDishes.forEach((dish, index) => {
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = dish.name;

    const priceTd = document.createElement('td');
    priceTd.textContent = dish.price + ' руб.';

    const removeTd = document.createElement('td');
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'x';
    removeBtn.addEventListener('click', () => {
      selectedDishes.splice(index, 1);
      cartCount--;
      cartCountEl.textContent = cartCount;
      renderCart();
    });
    removeTd.appendChild(removeBtn);

    tr.appendChild(nameTd);
    tr.appendChild(priceTd);
    tr.appendChild(removeTd);
    cartTableBody.appendChild(tr);

    total += dish.price;
  });

  cartTotalEl.textContent = 'Итоговая сумма: ' + total + ' руб.';
}

// Функция для создания кнопок навигации карусели
function createCarouselNavButtons() {
  // Создаем левую кнопку
  const leftBtn = document.createElement('button');
  leftBtn.className = 'carousel-btn left';
  leftBtn.innerHTML = '&#10094;'; // Unicode-символ для стрелки влево

  // Создаем правую кнопку
  const rightBtn = document.createElement('button');
  rightBtn.className = 'carousel-btn right';
  rightBtn.innerHTML = '&#10095;'; // Unicode-символ для стрелки вправо

  // Добавляем кнопки в контейнер карусели
  const carouselContainer = document.getElementById('carousel-container');
  carouselContainer.appendChild(leftBtn);
  carouselContainer.appendChild(rightBtn);

  // Обработчики клика: прокрутка контейнера на ширину одной карточки (250px — можно настроить)
  leftBtn.addEventListener('click', () => {
    carouselContainer.scrollLeft -= 250;
  });
  rightBtn.addEventListener('click', () => {
    carouselContainer.scrollLeft += 250;
  });
}

createCarouselNavButtons();


// КНОПКИ "ЗАКАЗАТЬ" И "ОЧИСТИТЬ КОРЗИНУ"
checkoutBtn.addEventListener('click', () => {
  alert('Спасибо за заказ!');
  selectedDishes = [];
  cartCount = 0;
  cartCountEl.textContent = '0';
  hideCartOverlay();
});

clearCartBtn.addEventListener('click', () => {
  selectedDishes = [];
  cartCount = 0;
  cartCountEl.textContent = '0';
  renderCart();
});

// СОЗДАЕМ 15 ЗВЁЗДОЧЕК
function isInsideRect(x, y, rect) {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

function createStarsInZones(count) {
  const headerRect = document.querySelector('header').getBoundingClientRect();
  const heroRect = document.getElementById('hero').getBoundingClientRect();
  const carouselRect = document.getElementById('carousel-section').getBoundingClientRect();
  const zones = [headerRect, heroRect, carouselRect];

  for (let i = 0; i < count; i++) {
    const star = document.createElement('img');
    star.src = 'img/menu-star/60-01.svg';
    star.className = 'star';

    const zone = zones[Math.floor(Math.random() * zones.length)];

    // Вычисляем случайные места 
    const x = zone.left + Math.random() * zone.width;
    const y = zone.top + Math.random() * zone.height;
    star.style.left = x + 'px';
    star.style.top = y + 'px';

    // Случайный размер
    const size = 30 + Math.random() * 40;
    star.style.width = size + 'px';

    document.body.appendChild(star);
  }
}
createStarsInZones(15);