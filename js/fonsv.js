const menuItems = document.querySelectorAll('ul li');

// Перебираем каждый элемент меню
menuItems.forEach(item => {
    // Добавляем обработчик события "наведение курсора"
    item.addEventListener('mouseover', () => {
        // Изменяем цвет фона и шрифта элемента
        item.style.backgroundColor = 'white';
        item.querySelector('a').style.color = '#0d1b0b';
    });

    // Добавляем обработчик события "уход курсора"
    item.addEventListener('mouseout', () => {
        // Возвращаем исходные стили элемента
        item.style.backgroundColor = '#0d1b0b';
        item.querySelector('a').style.color = 'white';
    });
});