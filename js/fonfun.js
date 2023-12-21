// Получаем список всех элементов с классом 'member'
const funk = document.querySelectorAll('.funk');

// Проходимся по каждому элементу и добавляем обработчик события 'mouseover'
funk.forEach(funk => {
    funk.addEventListener('mouseover', () => {
    // Получаем текущий фоновый цвет элемента
    const currentColor = funk.style.backgroundColor;
    
    // Генерируем случайный цвет в формате RGB
    const randomColor = `rgb(33,212,71)`;
    
    // Устанавливаем начальный фоновый цвет элемента перед анимацией
    funk.style.backgroundColor = currentColor || 'transparent';
    
    // Запускаем анимацию изменения фонового цвета
    funk.style.transition = 'background-color 0.5s';
    funk.style.backgroundColor = randomColor;
  });
  
  // Добавляем обработчик события 'mouseout' для возврата исходного фонового цвета
  funk.addEventListener('mouseout', () => {
    funk.style.backgroundColor = '';
  });
});