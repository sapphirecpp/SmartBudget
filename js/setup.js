document.getElementById('downloadButton').addEventListener('click', function () {
    // Создаем объект Blob с содержимым файла
    var fileContent = '';
    var blob = new Blob([fileContent], { type: 'text/plain' });

    // Создаем ссылку для скачивания файла
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'ваш_файл.txt';

    // Добавляем ссылку к документу и эмулируем клик для скачивания
    document.body.appendChild(a);
    a.click();

    // Удаляем ссылку из документа после скачивания
    document.body.removeChild(a);
});